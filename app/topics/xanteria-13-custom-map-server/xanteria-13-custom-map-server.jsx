import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-custom-map-server');
}

export default function Xanteria13CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-custom-map-server" />;
}
