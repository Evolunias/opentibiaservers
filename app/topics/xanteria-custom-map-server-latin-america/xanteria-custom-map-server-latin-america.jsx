import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-custom-map-server-latin-america');
}

export default function XanteriaCustomMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-custom-map-server-latin-america" />;
}
