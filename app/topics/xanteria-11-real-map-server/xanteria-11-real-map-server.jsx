import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-11-real-map-server');
}

export default function Xanteria11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-11-real-map-server" />;
}
