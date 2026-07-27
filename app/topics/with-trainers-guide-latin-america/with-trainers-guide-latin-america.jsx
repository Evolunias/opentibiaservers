import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-latin-america');
}

export default function WithTrainersGuideLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-latin-america" />;
}
