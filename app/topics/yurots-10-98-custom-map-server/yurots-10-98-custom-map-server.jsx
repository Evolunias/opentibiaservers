import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-10-98-custom-map-server');
}

export default function Yurots1098CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="yurots-10-98-custom-map-server" />;
}
