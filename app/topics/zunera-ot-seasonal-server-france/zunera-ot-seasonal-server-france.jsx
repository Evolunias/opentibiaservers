import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-france');
}

export default function ZuneraOtSeasonalServerFranceKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-france" />;
}
