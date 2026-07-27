import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-54-custom-map-servers');
}

export default function Yurots854CustomMapServersKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-54-custom-map-servers" />;
}
