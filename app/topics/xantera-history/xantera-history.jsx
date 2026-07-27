import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-history');
}

export default function XanteraHistoryKeywordPage() {
  return <StaticKeywordPage slug="xantera-history" />;
}
