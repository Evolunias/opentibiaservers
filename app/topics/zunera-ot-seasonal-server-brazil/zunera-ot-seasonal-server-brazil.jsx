import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-brazil');
}

export default function ZuneraOtSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-brazil" />;
}
