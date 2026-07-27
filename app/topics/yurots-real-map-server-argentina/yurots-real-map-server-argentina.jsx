import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-argentina');
}

export default function YurotsRealMapServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-argentina" />;
}
