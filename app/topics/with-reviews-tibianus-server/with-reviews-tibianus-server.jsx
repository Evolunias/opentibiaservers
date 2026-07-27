import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-server');
}

export default function WithReviewsTibianusServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-server" />;
}
