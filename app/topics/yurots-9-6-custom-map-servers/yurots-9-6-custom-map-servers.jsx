import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-custom-map-servers');
}

export default function Yurots96CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-custom-map-servers" />;
}
