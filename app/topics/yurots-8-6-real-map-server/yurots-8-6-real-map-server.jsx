import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-real-map-server');
}

export default function Yurots86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-real-map-server" />;
}
