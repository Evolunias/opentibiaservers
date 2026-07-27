import WithScreenshotsMistOfDeathHighscoresKeywordPage, { generateMetadata } from './with-screenshots-mist-of-death-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMistOfDeathHighscoresKeywordPage />;
}
