import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-servers-poland');
}

export default function YurotsEvoServersPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-servers-poland" />;
}
