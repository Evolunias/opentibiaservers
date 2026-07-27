import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-latin-america');
}

export default function YurotsSeasonalServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-latin-america" />;
}
