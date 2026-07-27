import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-argentina');
}

export default function ZuneraOtSeasonalServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-argentina" />;
}
