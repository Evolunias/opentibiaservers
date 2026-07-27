import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiame-register');
}

export default function WithReviewsTibiameRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiame-register" />;
}
