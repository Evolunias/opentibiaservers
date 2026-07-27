import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-server-germany');
}

export default function XanteriaRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-server-germany" />;
}
