import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-10-0-real-map-server');
}

export default function Xanteria100RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-10-0-real-map-server" />;
}
