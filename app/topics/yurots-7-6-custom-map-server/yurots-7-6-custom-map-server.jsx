import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-6-custom-map-server');
}

export default function Yurots76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-6-custom-map-server" />;
}
