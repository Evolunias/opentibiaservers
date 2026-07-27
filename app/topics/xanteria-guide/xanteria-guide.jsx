import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-guide');
}

export default function XanteriaGuideKeywordPage() {
  return <StaticKeywordPage slug="xanteria-guide" />;
}
