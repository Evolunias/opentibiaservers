import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-market');
}

export default function YurotsMarketKeywordPage() {
  return <StaticKeywordPage slug="yurots-market" />;
}
