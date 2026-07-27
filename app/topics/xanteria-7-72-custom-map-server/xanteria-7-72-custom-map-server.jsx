import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-72-custom-map-server');
}

export default function Xanteria772CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-72-custom-map-server" />;
}
