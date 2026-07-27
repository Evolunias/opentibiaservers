import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-sweden');
}

export default function YurotsEvoServerSwedenKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-sweden" />;
}
