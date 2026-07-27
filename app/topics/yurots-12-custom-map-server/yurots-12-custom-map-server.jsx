import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-12-custom-map-server');
}

export default function Yurots12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-12-custom-map-server" />;
}
