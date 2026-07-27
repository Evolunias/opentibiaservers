import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-low-exp-server-latin-america');
}

export default function XanteriaLowExpServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-low-exp-server-latin-america" />;
}
