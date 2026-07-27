import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-7-6-real-map-server');
}

export default function Xanteria76RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-7-6-real-map-server" />;
}
