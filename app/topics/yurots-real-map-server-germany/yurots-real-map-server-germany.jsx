import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-real-map-server-germany');
}

export default function YurotsRealMapServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-real-map-server-germany" />;
}
