import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-6-custom-map-server');
}

export default function ZuneraOt76CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-6-custom-map-server" />;
}
