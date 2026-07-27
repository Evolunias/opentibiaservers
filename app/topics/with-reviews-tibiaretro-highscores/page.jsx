import WithReviewsTibiaretroHighscoresKeywordPage, { generateMetadata } from './with-reviews-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithReviewsTibiaretroHighscoresKeywordPage />;
}
