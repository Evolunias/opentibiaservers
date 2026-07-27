import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-canada');
}

export default function YurotsEvoServerCanadaKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-canada" />;
}
