import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-germany');
}

export default function YurotsSeasonalServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-germany" />;
}
