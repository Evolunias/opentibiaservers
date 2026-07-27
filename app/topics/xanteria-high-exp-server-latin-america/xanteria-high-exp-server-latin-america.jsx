import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-high-exp-server-latin-america');
}

export default function XanteriaHighExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-high-exp-server-latin-america" />;
}
