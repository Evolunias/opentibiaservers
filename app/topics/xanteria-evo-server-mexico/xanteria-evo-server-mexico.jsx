import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-mexico');
}

export default function XanteriaEvoServerMexicoKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-mexico" />;
}
