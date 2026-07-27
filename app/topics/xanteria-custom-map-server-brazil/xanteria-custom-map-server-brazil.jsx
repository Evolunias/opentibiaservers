import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-brazil');
}

export default function XanteriaCustomMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-brazil" />;
}
