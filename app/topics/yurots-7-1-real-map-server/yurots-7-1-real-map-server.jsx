import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-1-real-map-server');
}

export default function Yurots71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-1-real-map-server" />;
}
