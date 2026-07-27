import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-north-america');
}

export default function WithTrainersForumNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-north-america" />;
}
