import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-seasonal-server-mexico');
}

export default function YurotsSeasonalServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-seasonal-server-mexico" />;
}
