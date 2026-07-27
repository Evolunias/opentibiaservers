import KeywordTopicArticle, { generateKeywordTopicMetadata } from '@/app/components/KeywordTopicArticle';

export function buildStaticKeywordMetadata(slug) {
  return generateKeywordTopicMetadata(slug);
}

export default function StaticKeywordPage({ slug }) {
  return <KeywordTopicArticle slug={slug} />;
}
