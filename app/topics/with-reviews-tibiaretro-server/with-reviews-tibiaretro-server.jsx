import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-server');
}

export default function WithReviewsTibiaretroServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-server" />;
}
