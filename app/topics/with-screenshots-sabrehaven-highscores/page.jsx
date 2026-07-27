import WithScreenshotsSabrehavenHighscoresKeywordPage, { generateMetadata } from './with-screenshots-sabrehaven-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSabrehavenHighscoresKeywordPage />;
}
