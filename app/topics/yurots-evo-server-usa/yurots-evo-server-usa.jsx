import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-usa');
}

export default function YurotsEvoServerUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-usa" />;
}
