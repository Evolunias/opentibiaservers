import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-login');
}

export default function WithReviewsTibianusLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-login" />;
}
