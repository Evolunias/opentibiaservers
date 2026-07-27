import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibijka-register');
}

export default function WithReviewsTibijkaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibijka-register" />;
}
