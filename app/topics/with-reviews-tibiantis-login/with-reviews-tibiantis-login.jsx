import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-login');
}

export default function WithReviewsTibiantisLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-login" />;
}
