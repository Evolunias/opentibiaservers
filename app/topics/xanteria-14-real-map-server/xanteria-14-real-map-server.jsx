import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-14-real-map-server');
}

export default function Xanteria14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="xanteria-14-real-map-server" />;
}
