import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-canada');
}

export default function YurotsSeasonalServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-canada" />;
}
