import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiantis-official');
}

export default function WithReviewsTibiantisOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiantis-official" />;
}
