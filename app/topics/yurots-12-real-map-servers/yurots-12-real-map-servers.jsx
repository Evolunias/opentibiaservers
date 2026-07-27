import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-real-map-servers');
}

export default function Yurots12RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-real-map-servers" />;
}
