import WithScreenshotsTibianusHighscoresKeywordPage, { generateMetadata } from './with-screenshots-tibianus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibianusHighscoresKeywordPage />;
}
