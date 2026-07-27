import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-poland');
}

export default function ZuneraOtSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-poland" />;
}
