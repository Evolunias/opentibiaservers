import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-latin-america');
}

export default function ZuneraOtSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-latin-america" />;
}
