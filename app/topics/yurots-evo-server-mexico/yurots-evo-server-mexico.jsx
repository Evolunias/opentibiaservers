import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-mexico');
}

export default function YurotsEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-mexico" />;
}
