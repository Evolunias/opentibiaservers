import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-real-map-server');
}

export default function ZuneraOt11RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-real-map-server" />;
}
