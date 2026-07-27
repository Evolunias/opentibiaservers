import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-usa');
}

export default function XanteriaRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-usa" />;
}
