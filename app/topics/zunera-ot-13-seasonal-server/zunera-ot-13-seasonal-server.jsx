import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-13-seasonal-server');
}

export default function ZuneraOt13SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-13-seasonal-server" />;
}
