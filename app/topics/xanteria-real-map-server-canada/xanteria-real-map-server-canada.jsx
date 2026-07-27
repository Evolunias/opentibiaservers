import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-server-canada');
}

export default function XanteriaRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-server-canada" />;
}
