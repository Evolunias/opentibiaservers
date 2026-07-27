import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-download');
}

export default function WithReviewsTibiaraDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-download" />;
}
