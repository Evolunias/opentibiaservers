import WithReviewsTibiascapeHighscoresKeywordPage, { generateMetadata } from './with-reviews-tibiascape-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiascapeHighscoresKeywordPage />;
}
