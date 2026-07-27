import WithReviewsTibianusHighscoresKeywordPage, { generateMetadata } from './with-reviews-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibianusHighscoresKeywordPage />;
}
