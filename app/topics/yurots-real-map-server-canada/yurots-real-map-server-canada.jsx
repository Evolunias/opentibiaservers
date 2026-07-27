import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-canada');
}

export default function YurotsRealMapServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-canada" />;
}
