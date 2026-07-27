import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('zanera-alternatives');
}

export default function ZaneraAlternativesKeywordPage() {
  return <StaticKeywordPage slug="zanera-alternatives" />;
}
