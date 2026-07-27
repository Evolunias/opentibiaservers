import WithReviewsYurotsHighscoresKeywordPage, { generateMetadata } from './with-reviews-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsYurotsHighscoresKeywordPage />;
}
