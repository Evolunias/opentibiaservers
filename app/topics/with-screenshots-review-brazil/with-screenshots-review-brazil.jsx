import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-brazil');
}

export default function WithScreenshotsReviewBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-brazil" />;
}
