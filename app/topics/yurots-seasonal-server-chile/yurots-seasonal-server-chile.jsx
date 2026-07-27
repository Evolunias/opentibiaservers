import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-chile');
}

export default function YurotsSeasonalServerChileKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-chile" />;
}
