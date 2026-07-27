import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-usa');
}

export default function YurotsRealMapServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-usa" />;
}
