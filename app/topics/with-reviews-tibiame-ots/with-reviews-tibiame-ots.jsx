import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-ots');
}

export default function WithReviewsTibiameOtsKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-ots" />;
}
