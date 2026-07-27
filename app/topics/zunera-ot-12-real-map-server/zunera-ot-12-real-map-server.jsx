import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-12-real-map-server');
}

export default function ZuneraOt12RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-12-real-map-server" />;
}
