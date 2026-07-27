import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-usa');
}

export default function WithTrainersForumUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-usa" />;
}
