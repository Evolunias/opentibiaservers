import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-7-4-seasonal-server');
}

export default function ZuneraOt74SeasonalServerKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-7-4-seasonal-server" />;
}
