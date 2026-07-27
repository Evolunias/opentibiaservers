import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-real-map-servers');
}

export default function Yurots15RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-real-map-servers" />;
}
