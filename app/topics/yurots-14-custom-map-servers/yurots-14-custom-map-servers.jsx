import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-custom-map-servers');
}

export default function Yurots14CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-custom-map-servers" />;
}
