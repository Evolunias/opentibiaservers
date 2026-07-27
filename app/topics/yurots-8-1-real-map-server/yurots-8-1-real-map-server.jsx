import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-1-real-map-server');
}

export default function Yurots81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-1-real-map-server" />;
}
