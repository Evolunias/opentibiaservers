import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-germany');
}

export default function ZuneraOtSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-germany" />;
}
