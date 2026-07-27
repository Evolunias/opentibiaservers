import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-canada');
}

export default function ZuneraOtSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-canada" />;
}
