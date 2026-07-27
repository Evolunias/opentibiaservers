import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-download');
}

export default function WithReviewsTibiaretroDownloadKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-download" />;
}
