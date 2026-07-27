import WithReviewsTibijkaHighscoresKeywordPage, { generateMetadata } from './with-reviews-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibijkaHighscoresKeywordPage />;
}
