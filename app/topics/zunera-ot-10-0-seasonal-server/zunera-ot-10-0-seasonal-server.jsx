import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-10-0-seasonal-server');
}

export default function ZuneraOt100SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-10-0-seasonal-server" />;
}
