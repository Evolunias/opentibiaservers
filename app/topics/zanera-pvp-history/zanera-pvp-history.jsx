import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-pvp-history');
}

export default function ZaneraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="zanera-pvp-history" />;
}
