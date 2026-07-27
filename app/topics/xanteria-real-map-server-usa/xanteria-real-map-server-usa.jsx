import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-server-usa');
}

export default function XanteriaRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-server-usa" />;
}
