import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-server-france');
}

export default function ZuneraOtRealMapServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-server-france" />;
}
