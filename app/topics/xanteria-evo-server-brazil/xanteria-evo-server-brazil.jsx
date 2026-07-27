import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-server-brazil');
}

export default function XanteriaEvoServerBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-server-brazil" />;
}
