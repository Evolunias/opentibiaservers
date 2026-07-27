import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-8-6-custom-map-server');
}

export default function Yurots86CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-8-6-custom-map-server" />;
}
