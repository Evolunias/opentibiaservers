import WithScreenshotsOlderaHighscoresKeywordPage, { generateMetadata } from './with-screenshots-oldera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsOlderaHighscoresKeywordPage />;
}
