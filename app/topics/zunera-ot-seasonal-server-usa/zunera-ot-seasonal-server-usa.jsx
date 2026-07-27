import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-usa');
}

export default function ZuneraOtSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-usa" />;
}
