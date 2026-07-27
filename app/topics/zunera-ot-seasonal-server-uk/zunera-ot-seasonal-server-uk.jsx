import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-uk');
}

export default function ZuneraOtSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-uk" />;
}
