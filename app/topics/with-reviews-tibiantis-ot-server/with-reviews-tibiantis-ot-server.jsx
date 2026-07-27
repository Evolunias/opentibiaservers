import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-ot-server');
}

export default function WithReviewsTibiantisOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-ot-server" />;
}
