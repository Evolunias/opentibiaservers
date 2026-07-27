import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-no-reset-server-latin-america');
}

export default function XanteriaNoResetServerLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="xanteria-no-reset-server-latin-america" />;
}
