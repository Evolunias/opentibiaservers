import WithReviewsTibiaraHighscoresKeywordPage, { generateMetadata } from './with-reviews-tibiara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaraHighscoresKeywordPage />;
}
