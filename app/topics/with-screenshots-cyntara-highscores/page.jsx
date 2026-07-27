import WithScreenshotsCyntaraHighscoresKeywordPage, { generateMetadata } from './with-screenshots-cyntara-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCyntaraHighscoresKeywordPage />;
}
