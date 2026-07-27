import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zunera-ot-seasonal-server-sweden');
}

export default function ZuneraOtSeasonalServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="zunera-ot-seasonal-server-sweden" />;
}
