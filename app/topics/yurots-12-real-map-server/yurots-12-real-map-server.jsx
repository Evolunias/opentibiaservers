import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-real-map-server');
}

export default function Yurots12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-real-map-server" />;
}
