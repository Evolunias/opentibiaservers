import { getSupabaseServerClient } from '@/lib/supabase-server';

function isMissingRelation(error) {
  return error?.code === '42P01' || /relation .* does not exist/i.test(error?.message || '');
}

export async function getForumIndex() {
  const supabase = getSupabaseServerClient();
  if (!supabase) return { sections: [], error: 'Supabase is not configured.' };

  const [{ data: sections, error: sectionError }, { data: boards, error: boardError }] = await Promise.all([
    supabase.from('forum_sections').select('*').order('sort_order', { ascending: true }),
    supabase.from('forum_boards').select('*').order('sort_order', { ascending: true }),
  ]);

  if (sectionError || boardError) {
    const error = sectionError || boardError;
    if (isMissingRelation(error)) {
      return { sections: [], error: 'Forum tables are not migrated yet. Run the forum SQL migrations in Supabase.' };
    }
    return { sections: [], error: error.message };
  }

  const boardRows = boards || [];
  const parents = boardRows.filter((board) => !board.parent_board_id);
  const childrenByParent = boardRows.reduce((acc, board) => {
    if (!board.parent_board_id) return acc;
    if (!acc[board.parent_board_id]) acc[board.parent_board_id] = [];
    acc[board.parent_board_id].push(board);
    return acc;
  }, {});

  const nested = (sections || []).map((section) => ({
    ...section,
    boards: parents
      .filter((board) => board.section_id === section.id)
      .map((board) => ({
        ...board,
        children: childrenByParent[board.id] || [],
      })),
  }));

  return { sections: nested, error: null };
}

export async function getBoardBySlug(slug) {
  const supabase = getSupabaseServerClient();
  if (!supabase || !slug) return { board: null, children: [], error: null };

  const { data: board, error } = await supabase
    .from('forum_boards')
    .select('*, forum_sections(name, slug)')
    .eq('slug', slug)
    .maybeSingle();

  if (error) {
    if (isMissingRelation(error)) return { board: null, children: [], error: 'Forum tables are not migrated yet.' };
    return { board: null, children: [], error: error.message };
  }

  if (!board) return { board: null, children: [], error: null };

  const { data: children } = await supabase
    .from('forum_boards')
    .select('*')
    .eq('parent_board_id', board.id)
    .order('sort_order', { ascending: true });

  return { board, children: children || [], error: null };
}

export async function getTopicsForBoard(boardId, { limit = 40 } = {}) {
  const supabase = getSupabaseServerClient();
  if (!supabase || !boardId) return { topics: [], error: null };

  const { data, error } = await supabase
    .from('forum_topics')
    .select('*')
    .eq('board_id', boardId)
    .neq('status', 'hidden')
    .order('pinned', { ascending: false })
    .order('last_post_at', { ascending: false })
    .limit(limit);

  if (error) return { topics: [], error: error.message };
  return { topics: data || [], error: null };
}

export async function getTopicBySlugs(boardSlug, topicSlug) {
  const supabase = getSupabaseServerClient();
  if (!supabase || !boardSlug || !topicSlug) return { board: null, topic: null, posts: [], error: null };

  const { board, error: boardError } = await getBoardBySlug(boardSlug);
  if (boardError || !board) return { board: null, topic: null, posts: [], error: boardError || 'Board not found.' };

  const { data: topic, error: topicError } = await supabase
    .from('forum_topics')
    .select('*')
    .eq('board_id', board.id)
    .eq('slug', topicSlug)
    .maybeSingle();

  if (topicError) return { board, topic: null, posts: [], error: topicError.message };
  if (!topic || topic.status === 'hidden') return { board, topic: null, posts: [], error: 'Topic not found.' };

  const { data: posts, error: postError } = await supabase
    .from('forum_posts')
    .select('*')
    .eq('topic_id', topic.id)
    .eq('status', 'published')
    .order('created_at', { ascending: true });

  return { board, topic, posts: posts || [], error: postError?.message || null };
}

export { slugifyTopic } from '@/lib/forum-utils';
