import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-germany');
}

export default function YurotsEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-germany" />;
}
