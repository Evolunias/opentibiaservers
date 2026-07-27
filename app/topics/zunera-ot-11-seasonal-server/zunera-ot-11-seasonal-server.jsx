import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-11-seasonal-server');
}

export default function ZuneraOt11SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-11-seasonal-server" />;
}
