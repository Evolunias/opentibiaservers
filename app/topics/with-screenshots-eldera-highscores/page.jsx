import WithScreenshotsElderaHighscoresKeywordPage, { generateMetadata } from './with-screenshots-eldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsElderaHighscoresKeywordPage />;
}
