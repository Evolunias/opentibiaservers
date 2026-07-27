import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-real-map-server');
}

export default function Yurots11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-real-map-server" />;
}
