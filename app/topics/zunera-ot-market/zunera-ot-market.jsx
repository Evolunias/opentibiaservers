import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-market');
}

export default function ZuneraOtMarketKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-market" />;
}
