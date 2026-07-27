import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-poland');
}

export default function XanteriaEvoServerPolandKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-poland" />;
}
