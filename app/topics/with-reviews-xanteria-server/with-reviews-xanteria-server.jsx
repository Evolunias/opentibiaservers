import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-server');
}

export default function WithReviewsXanteriaServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-server" />;
}
