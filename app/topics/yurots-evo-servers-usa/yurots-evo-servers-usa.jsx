import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-servers-usa');
}

export default function YurotsEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-servers-usa" />;
}
