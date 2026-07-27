import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-real-map-servers');
}

export default function Yurots13RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-real-map-servers" />;
}
