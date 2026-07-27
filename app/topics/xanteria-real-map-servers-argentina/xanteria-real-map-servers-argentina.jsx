import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-servers-argentina');
}

export default function XanteriaRealMapServersArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-servers-argentina" />;
}
