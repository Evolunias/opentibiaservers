import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-evo-server-france');
}

export default function YurotsEvoServerFranceKeywordPage() {
  return <StaticKeywordPage slug="yurots-evo-server-france" />;
}
