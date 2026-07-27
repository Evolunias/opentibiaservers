import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-forum-canada');
}

export default function WithTrainersForumCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-forum-canada" />;
}
