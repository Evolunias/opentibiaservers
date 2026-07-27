import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-season-latin-america');
}

export default function WithTrainersSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-season-latin-america" />;
}
