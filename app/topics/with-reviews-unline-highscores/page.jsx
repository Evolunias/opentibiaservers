import WithReviewsUnlineHighscoresKeywordPage, { generateMetadata } from './with-reviews-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsUnlineHighscoresKeywordPage />;
}
