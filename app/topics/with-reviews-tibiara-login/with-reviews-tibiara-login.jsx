import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-login');
}

export default function WithReviewsTibiaraLoginKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-login" />;
}
