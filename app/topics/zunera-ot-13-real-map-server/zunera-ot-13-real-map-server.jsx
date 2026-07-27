import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-real-map-server');
}

export default function ZuneraOt13RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-real-map-server" />;
}
