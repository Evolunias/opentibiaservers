import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-6-real-map-server');
}

export default function Xanteria86RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-6-real-map-server" />;
}
