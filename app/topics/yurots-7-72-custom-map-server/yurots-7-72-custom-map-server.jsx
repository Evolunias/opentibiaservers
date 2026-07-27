import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-7-72-custom-map-server');
}

export default function Yurots772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-7-72-custom-map-server" />;
}
