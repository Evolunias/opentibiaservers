import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-real-map-server-uk');
}

export default function XanteriaRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="xanteria-real-map-server-uk" />;
}
