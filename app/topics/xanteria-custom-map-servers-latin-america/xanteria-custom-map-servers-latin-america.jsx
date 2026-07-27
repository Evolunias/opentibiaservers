import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-servers-latin-america');
}

export default function XanteriaCustomMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-servers-latin-america" />;
}
