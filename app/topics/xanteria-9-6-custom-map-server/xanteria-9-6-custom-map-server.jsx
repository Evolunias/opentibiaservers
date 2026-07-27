import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-custom-map-server');
}

export default function Xanteria96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-custom-map-server" />;
}
