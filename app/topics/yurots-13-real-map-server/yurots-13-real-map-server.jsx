import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-real-map-server');
}

export default function Yurots13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-real-map-server" />;
}
