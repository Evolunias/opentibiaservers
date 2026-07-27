import WithScreenshotsBlazeraHighscoresKeywordPage, { generateMetadata } from './with-screenshots-blazera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraHighscoresKeywordPage />;
}
