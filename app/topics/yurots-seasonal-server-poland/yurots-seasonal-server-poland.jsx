import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-poland');
}

export default function YurotsSeasonalServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-poland" />;
}
