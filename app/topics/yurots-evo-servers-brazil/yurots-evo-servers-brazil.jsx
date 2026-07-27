import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-servers-brazil');
}

export default function YurotsEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-servers-brazil" />;
}
