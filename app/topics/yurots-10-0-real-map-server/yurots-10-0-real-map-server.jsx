import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-real-map-server');
}

export default function Yurots100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-real-map-server" />;
}
