import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-argentina');
}

export default function YurotsEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-argentina" />;
}
