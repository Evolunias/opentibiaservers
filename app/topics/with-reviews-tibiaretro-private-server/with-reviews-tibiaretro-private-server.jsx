import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaretro-private-server');
}

export default function WithReviewsTibiaretroPrivateServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaretro-private-server" />;
}
