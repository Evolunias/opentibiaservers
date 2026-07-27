import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-brazil');
}

export default function YurotsSeasonalServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-brazil" />;
}
