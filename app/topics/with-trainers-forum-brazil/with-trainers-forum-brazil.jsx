import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-brazil');
}

export default function WithTrainersForumBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-brazil" />;
}
