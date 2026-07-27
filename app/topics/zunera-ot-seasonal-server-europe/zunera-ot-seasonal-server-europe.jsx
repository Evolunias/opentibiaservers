import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-europe');
}

export default function ZuneraOtSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-europe" />;
}
