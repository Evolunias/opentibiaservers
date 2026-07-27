import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-download');
}

export default function WithReviewsUnlineDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-download" />;
}
