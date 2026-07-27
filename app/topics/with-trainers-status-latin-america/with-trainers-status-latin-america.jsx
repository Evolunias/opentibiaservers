import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-status-latin-america');
}

export default function WithTrainersStatusLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-status-latin-america" />;
}
