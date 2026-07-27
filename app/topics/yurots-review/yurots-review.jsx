import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('yurots-review');
}

export default function YurotsReviewKeywordPage() {
  return <StaticKeywordPage slug="yurots-review" />;
}
