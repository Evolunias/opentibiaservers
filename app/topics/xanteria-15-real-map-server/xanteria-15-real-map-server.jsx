import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-15-real-map-server');
}

export default function Xanteria15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-15-real-map-server" />;
}
