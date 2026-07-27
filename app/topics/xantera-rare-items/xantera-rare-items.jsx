import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-rare-items');
}

export default function XanteraRareItemsKeywordPage() {
  return <StaticKeywordPage slug="xantera-rare-items" />;
}
