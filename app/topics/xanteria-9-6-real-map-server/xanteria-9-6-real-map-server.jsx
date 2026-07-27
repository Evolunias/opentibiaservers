import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-9-6-real-map-server');
}

export default function Xanteria96RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-9-6-real-map-server" />;
}
