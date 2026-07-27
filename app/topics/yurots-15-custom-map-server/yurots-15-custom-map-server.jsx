import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-15-custom-map-server');
}

export default function Yurots15CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-15-custom-map-server" />;
}
