import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape');
}

export default function WithReviewsTibiascapeKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape" />;
}
