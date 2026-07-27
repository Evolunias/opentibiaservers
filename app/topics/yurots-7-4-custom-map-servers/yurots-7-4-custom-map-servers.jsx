import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-custom-map-servers');
}

export default function Yurots74CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-custom-map-servers" />;
}
