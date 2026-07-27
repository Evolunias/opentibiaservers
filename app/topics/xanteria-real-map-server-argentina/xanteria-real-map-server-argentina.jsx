import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-server-argentina');
}

export default function XanteriaRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-server-argentina" />;
}
