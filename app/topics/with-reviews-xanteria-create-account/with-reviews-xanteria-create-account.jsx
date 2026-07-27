import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-create-account');
}

export default function WithReviewsXanteriaCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-create-account" />;
}
