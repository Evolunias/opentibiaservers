import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-uk');
}

export default function YurotsRealMapServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-uk" />;
}
