import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-15-real-map-server');
}

export default function ZuneraOt15RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-15-real-map-server" />;
}
