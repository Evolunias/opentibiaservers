import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-server');
}

export default function WithReviewsTibiaoriginsServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-server" />;
}
