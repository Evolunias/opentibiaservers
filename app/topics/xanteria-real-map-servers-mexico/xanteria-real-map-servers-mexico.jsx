import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-mexico');
}

export default function XanteriaRealMapServersMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-mexico" />;
}
