import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-north-america');
}

export default function XanteriaCustomMapServersNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-north-america" />;
}
