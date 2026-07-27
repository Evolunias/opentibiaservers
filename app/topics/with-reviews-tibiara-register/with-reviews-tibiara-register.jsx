import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiara-register');
}

export default function WithReviewsTibiaraRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiara-register" />;
}
