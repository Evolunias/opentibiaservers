import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-0-custom-map-server');
}

export default function Yurots100CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-0-custom-map-server" />;
}
