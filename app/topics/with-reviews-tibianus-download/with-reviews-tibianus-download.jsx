import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-download');
}

export default function WithReviewsTibianusDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-download" />;
}
