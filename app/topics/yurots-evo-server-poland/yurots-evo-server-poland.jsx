import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-poland');
}

export default function YurotsEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-poland" />;
}
