import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-south-america');
}

export default function WithTrainersForumSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-south-america" />;
}
