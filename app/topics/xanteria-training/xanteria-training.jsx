import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-training');
}

export default function XanteriaTrainingKeywordPage() {
  return <StaticKeywordPage slug="xanteria-training" />;
}
