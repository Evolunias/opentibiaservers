import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-real-map-server');
}

export default function Yurots15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-real-map-server" />;
}
