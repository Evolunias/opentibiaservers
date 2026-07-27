import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-custom-map-server');
}

export default function ZuneraOt11CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-custom-map-server" />;
}
