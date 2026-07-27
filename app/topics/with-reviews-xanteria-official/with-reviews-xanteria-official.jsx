import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-official');
}

export default function WithReviewsXanteriaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-official" />;
}
