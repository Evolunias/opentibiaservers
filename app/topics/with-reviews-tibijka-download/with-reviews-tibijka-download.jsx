import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-download');
}

export default function WithReviewsTibijkaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-download" />;
}
