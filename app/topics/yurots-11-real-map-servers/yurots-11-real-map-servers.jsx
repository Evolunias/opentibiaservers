import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-real-map-servers');
}

export default function Yurots11RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-real-map-servers" />;
}
