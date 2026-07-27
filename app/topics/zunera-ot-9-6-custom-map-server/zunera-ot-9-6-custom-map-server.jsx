import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-9-6-custom-map-server');
}

export default function ZuneraOt96CustomMapServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-9-6-custom-map-server" />;
}
