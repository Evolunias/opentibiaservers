import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-review-france');
}

export default function WithScreenshotsReviewFranceKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-review-france" />;
}
