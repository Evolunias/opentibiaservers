import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-trainers-guide-usa');
}

export default function WithTrainersGuideUsaKeywordPage() {
  return <StaticKeywordPage slug="with-trainers-guide-usa" />;
}
