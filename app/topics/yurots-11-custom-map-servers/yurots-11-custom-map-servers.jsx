import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-custom-map-servers');
}

export default function Yurots11CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-custom-map-servers" />;
}
