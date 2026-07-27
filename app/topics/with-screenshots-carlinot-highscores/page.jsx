import WithScreenshotsCarlinotHighscoresKeywordPage, { generateMetadata } from './with-screenshots-carlinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCarlinotHighscoresKeywordPage />;
}
