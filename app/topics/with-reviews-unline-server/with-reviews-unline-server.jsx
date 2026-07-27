import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-unline-server');
}

export default function WithReviewsUnlineServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-unline-server" />;
}
