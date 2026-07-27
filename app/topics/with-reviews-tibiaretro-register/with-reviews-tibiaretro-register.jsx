import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-register');
}

export default function WithReviewsTibiaretroRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-register" />;
}
