import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-4-custom-map-server');
}

export default function Xanteria74CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-4-custom-map-server" />;
}
