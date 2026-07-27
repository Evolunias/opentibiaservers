import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-europe');
}

export default function YurotsSeasonalServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-europe" />;
}
