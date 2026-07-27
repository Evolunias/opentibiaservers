import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-11-custom-map-server');
}

export default function Yurots11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-11-custom-map-server" />;
}
