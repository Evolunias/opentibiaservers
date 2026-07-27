import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-ot-server');
}

export default function WithReviewsTibianusOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-ot-server" />;
}
