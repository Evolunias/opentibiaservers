import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-9-6-custom-map-server');
}

export default function Yurots96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-9-6-custom-map-server" />;
}
