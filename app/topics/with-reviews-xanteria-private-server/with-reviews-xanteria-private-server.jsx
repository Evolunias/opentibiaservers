import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-private-server');
}

export default function WithReviewsXanteriaPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-private-server" />;
}
