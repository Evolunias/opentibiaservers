import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-14-seasonal-server');
}

export default function ZuneraOt14SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-14-seasonal-server" />;
}
