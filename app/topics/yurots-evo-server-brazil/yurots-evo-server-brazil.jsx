import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-brazil');
}

export default function YurotsEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-brazil" />;
}
