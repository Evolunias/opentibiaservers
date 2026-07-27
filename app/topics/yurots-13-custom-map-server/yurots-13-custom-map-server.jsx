import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-13-custom-map-server');
}

export default function Yurots13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-13-custom-map-server" />;
}
