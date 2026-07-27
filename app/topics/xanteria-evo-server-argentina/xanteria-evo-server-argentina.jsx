import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-argentina');
}

export default function XanteriaEvoServerArgentinaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-argentina" />;
}
