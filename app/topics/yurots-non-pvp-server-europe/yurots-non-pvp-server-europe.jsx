import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-europe');
}

export default function YurotsNonPvpServerEuropeKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-europe" />;
}
