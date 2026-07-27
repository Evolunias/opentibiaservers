import WithScreenshotsNtoStarHighscoresKeywordPage, { generateMetadata } from './with-screenshots-nto-star-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarHighscoresKeywordPage />;
}
