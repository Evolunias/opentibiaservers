import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiaorigins-official');
}

export default function WithReviewsTibiaoriginsOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiaorigins-official" />;
}
