import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-uk');
}

export default function YurotsSeasonalServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-uk" />;
}
