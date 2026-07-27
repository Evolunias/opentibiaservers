import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-uk');
}

export default function YurotsNonPvpServerUkKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-uk" />;
}
