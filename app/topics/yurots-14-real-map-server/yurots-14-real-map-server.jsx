import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-real-map-server');
}

export default function Yurots14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-real-map-server" />;
}
