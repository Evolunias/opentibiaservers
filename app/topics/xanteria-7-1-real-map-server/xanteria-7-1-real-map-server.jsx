import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-1-real-map-server');
}

export default function Xanteria71RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-1-real-map-server" />;
}
