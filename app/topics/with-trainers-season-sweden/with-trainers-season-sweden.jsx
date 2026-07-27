import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-sweden');
}

export default function WithTrainersSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-sweden" />;
}
