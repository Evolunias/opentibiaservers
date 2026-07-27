import WithScreenshotsMediviaHighscoresKeywordPage, { generateMetadata } from './with-screenshots-medivia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMediviaHighscoresKeywordPage />;
}
