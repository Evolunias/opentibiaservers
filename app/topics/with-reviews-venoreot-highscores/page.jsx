import WithReviewsVenoreotHighscoresKeywordPage, { generateMetadata } from './with-reviews-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsVenoreotHighscoresKeywordPage />;
}
