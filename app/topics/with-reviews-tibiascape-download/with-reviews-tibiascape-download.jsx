import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-download');
}

export default function WithReviewsTibiascapeDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-download" />;
}
