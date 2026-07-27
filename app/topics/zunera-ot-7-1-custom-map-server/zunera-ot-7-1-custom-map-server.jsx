import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-1-custom-map-server');
}

export default function ZuneraOt71CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-1-custom-map-server" />;
}
