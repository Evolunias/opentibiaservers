import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-reviews-zezenia-online-highscores');
}

export default function WithReviewsZezeniaOnlineHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-reviews-zezenia-online-highscores" />;
}
