import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-ot');
}

export default function WithReviewsTibiameOtKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-ot" />;
}
