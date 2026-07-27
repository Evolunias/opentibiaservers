import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-rare-items');
}

export default function ZaneraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="zanera-rare-items" />;
}
