import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-server-mexico');
}

export default function XanteriaRealMapServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-server-mexico" />;
}
