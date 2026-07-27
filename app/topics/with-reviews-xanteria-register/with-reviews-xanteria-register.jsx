import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-register');
}

export default function WithReviewsXanteriaRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-register" />;
}
