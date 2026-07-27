import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-client');
}

export default function WithReviewsTibiantisClientKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-client" />;
}
