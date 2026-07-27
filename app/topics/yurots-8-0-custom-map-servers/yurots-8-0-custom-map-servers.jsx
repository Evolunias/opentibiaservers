import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-0-custom-map-servers');
}

export default function Yurots80CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-0-custom-map-servers" />;
}
