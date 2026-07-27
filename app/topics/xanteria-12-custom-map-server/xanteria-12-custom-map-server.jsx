import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-12-custom-map-server');
}

export default function Xanteria12CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-12-custom-map-server" />;
}
