import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-yurots-download');
}

export default function WithReviewsYurotsDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-yurots-download" />;
}
