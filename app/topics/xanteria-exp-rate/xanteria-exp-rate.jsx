import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-exp-rate');
}

export default function XanteriaExpRateKeywordPage() {
  return <StaticKeywordPage slug="xanteria-exp-rate" />;
}
