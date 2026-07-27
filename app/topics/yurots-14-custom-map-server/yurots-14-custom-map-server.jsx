import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-14-custom-map-server');
}

export default function Yurots14CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-14-custom-map-server" />;
}
