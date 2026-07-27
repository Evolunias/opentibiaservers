import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-13-real-map-server');
}

export default function Xanteria13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-13-real-map-server" />;
}
