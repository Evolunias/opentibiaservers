import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-usa');
}

export default function YurotsSeasonalServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-usa" />;
}
