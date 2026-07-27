import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-register');
}

export default function WithReviewsTibiascapeRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-register" />;
}
