import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-server-poland');
}

export default function XanteriaRealMapServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-server-poland" />;
}
