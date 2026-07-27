import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-north-america');
}

export default function XanteriaCustomMapServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-north-america" />;
}
