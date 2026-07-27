import WithScreenshotsRealestaHighscoresKeywordPage, { generateMetadata } from './with-screenshots-realesta-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRealestaHighscoresKeywordPage />;
}
