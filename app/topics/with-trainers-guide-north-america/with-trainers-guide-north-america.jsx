import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-north-america');
}

export default function WithTrainersGuideNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-north-america" />;
}
