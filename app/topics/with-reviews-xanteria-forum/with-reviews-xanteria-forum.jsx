import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-xanteria-forum');
}

export default function WithReviewsXanteriaForumKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-xanteria-forum" />;
}
