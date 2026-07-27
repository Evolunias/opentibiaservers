import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-latin-america');
}

export default function XanteriaRealMapServersLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-latin-america" />;
}
