import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-create-account');
}

export default function WithReviewsTibiaretroCreateAccountKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-create-account" />;
}
