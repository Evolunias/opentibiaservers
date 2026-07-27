import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-server-latin-america');
}

export default function XanteriaRealMapServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-server-latin-america" />;
}
