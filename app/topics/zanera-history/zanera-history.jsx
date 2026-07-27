import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-history');
}

export default function ZaneraHistoryKeywordPage() {
  return <StaticKeywordPage slug="zanera-history" />;
}
