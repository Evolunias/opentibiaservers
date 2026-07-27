import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-sweden');
}

export default function WithTrainersForumSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-sweden" />;
}
