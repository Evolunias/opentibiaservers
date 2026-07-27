import WithReviewsTrashformersHighscoresKeywordPage, { generateMetadata } from './with-reviews-trashformers-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTrashformersHighscoresKeywordPage />;
}
