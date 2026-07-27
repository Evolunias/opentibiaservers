import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-market');
}

export default function XanteriaMarketKeywordPage() {
  return <StaticKeywordPage slug="xanteria-market" />;
}
