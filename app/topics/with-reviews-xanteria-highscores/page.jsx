import WithReviewsXanteriaHighscoresKeywordPage, { generateMetadata } from './with-reviews-xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsXanteriaHighscoresKeywordPage />;
}
