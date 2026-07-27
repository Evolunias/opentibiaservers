import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-evo-servers-usa');
}

export default function XanteriaEvoServersUsaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-evo-servers-usa" />;
}
