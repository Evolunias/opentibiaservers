import WithReviewsTibiantisHighscoresKeywordPage, { generateMetadata } from './with-reviews-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiantisHighscoresKeywordPage />;
}
