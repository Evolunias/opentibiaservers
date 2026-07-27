import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-ot-server');
}

export default function WithReviewsXanteriaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-ot-server" />;
}
