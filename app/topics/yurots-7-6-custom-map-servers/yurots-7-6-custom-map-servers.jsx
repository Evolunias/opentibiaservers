import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-6-custom-map-servers');
}

export default function Yurots76CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-6-custom-map-servers" />;
}
