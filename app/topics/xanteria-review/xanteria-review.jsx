import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('xanteria-review');
}

export default function XanteriaReviewKeywordPage() {
  return <StaticKeywordPage slug="xanteria-review" />;
}
