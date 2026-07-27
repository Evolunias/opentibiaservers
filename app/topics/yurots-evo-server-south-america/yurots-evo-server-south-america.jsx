import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-south-america');
}

export default function YurotsEvoServerSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-south-america" />;
}
