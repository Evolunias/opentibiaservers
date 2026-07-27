import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-custom-map-servers-france');
}

export default function ZuneraOtCustomMapServersFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-custom-map-servers-france" />;
}
