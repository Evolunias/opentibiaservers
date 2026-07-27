import WithScreenshotsCoxaotHighscoresKeywordPage, { generateMetadata } from './with-screenshots-coxaot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCoxaotHighscoresKeywordPage />;
}
