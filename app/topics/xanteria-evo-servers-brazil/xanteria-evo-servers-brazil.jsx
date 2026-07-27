import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-servers-brazil');
}

export default function XanteriaEvoServersBrazilKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-servers-brazil" />;
}
