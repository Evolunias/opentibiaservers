import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-download');
}

export default function WithReviewsXanteriaDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-download" />;
}
