import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-argentina');
}

export default function WithTrainersForumArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-argentina" />;
}
