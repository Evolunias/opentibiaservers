import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-season');
}

export default function YurotsSeasonKeywordPage() {
  return <StaticKeywordPage slug="yurots-season" />;
}
