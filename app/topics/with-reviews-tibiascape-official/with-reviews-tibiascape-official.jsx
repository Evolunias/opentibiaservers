import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-tibiascape-official');
}

export default function WithReviewsTibiascapeOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-tibiascape-official" />;
}
