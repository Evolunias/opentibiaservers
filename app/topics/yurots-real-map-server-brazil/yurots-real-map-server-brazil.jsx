import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-brazil');
}

export default function YurotsRealMapServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-brazil" />;
}
