import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-pvp-history');
}

export default function XanteraPvpHistoryKeywordPage() {
  return <StaticKeywordPage slug="xantera-pvp-history" />;
}
