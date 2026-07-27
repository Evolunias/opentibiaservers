import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-alternatives');
}

export default function YurotsAlternativesKeywordPage() {
  return <StaticKeywordPage slug="yurots-alternatives" />;
}
