import WithScreenshotsTibijkaHighscoresKeywordPage, { generateMetadata } from './with-screenshots-tibijka-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibijkaHighscoresKeywordPage />;
}
