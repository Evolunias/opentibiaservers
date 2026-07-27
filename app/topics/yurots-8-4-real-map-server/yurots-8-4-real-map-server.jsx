import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-4-real-map-server');
}

export default function Yurots84RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-4-real-map-server" />;
}
