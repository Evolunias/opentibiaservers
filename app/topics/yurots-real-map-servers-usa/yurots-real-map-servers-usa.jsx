import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-servers-usa');
}

export default function YurotsRealMapServersUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-servers-usa" />;
}
