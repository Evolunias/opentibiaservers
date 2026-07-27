import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-mexico');
}

export default function ZuneraOtSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-mexico" />;
}
