import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-non-pvp-server-sweden');
}

export default function YurotsNonPvpServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-non-pvp-server-sweden" />;
}
