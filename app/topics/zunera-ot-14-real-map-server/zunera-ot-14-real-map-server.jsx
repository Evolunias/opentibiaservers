import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-real-map-server');
}

export default function ZuneraOt14RealMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-real-map-server" />;
}
