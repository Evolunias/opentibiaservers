import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-north-america');
}

export default function YurotsSeasonalServerNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-north-america" />;
}
