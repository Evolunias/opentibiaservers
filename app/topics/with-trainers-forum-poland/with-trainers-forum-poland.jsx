import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-poland');
}

export default function WithTrainersForumPolandKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-poland" />;
}
