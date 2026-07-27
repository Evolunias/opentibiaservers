import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibianus-official');
}

export default function WithReviewsTibianusOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibianus-official" />;
}
