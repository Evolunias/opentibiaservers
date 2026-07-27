import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-north-america');
}

export default function ZuneraOtSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-north-america" />;
}
