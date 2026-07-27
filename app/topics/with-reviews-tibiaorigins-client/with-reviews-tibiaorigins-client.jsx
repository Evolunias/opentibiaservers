import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-client');
}

export default function WithReviewsTibiaoriginsClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-client" />;
}
