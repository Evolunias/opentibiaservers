import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-chile');
}

export default function WithScreenshotsReviewChileKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-chile" />;
}
