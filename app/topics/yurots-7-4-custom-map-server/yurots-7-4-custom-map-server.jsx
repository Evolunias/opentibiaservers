import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-4-custom-map-server');
}

export default function Yurots74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-4-custom-map-server" />;
}
