import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-8-1-real-map-server');
}

export default function Xanteria81RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-8-1-real-map-server" />;
}
