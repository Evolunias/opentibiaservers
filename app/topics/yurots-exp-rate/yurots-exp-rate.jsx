import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-exp-rate');
}

export default function YurotsExpRateKeywordPage() {
  return <StaticKeywordPage slug="yurots-exp-rate" />;
}
