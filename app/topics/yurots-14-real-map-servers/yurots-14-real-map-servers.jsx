import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-real-map-servers');
}

export default function Yurots14RealMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-real-map-servers" />;
}
