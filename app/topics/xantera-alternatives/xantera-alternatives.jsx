import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xantera-alternatives');
}

export default function XanteraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="xantera-alternatives" />;
}
