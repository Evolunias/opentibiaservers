import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-latin-america');
}

export default function YurotsEvoServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-latin-america" />;
}
