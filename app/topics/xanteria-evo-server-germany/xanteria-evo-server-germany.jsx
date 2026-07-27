import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-germany');
}

export default function XanteriaEvoServerGermanyKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-germany" />;
}
