import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-poland');
}

export default function YurotsNonPvpServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-poland" />;
}
