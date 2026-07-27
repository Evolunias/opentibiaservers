import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-server');
}

export default function WithReviewsTibiantisServerKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-server" />;
}
