import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-real-map-servers-france');
}

export default function ZuneraOtRealMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-real-map-servers-france" />;
}
