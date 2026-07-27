import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-custom-map-servers');
}

export default function Yurots13CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-custom-map-servers" />;
}
