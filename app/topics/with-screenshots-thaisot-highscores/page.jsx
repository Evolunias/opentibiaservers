import WithScreenshotsThaisotHighscoresKeywordPage, { generateMetadata } from './with-screenshots-thaisot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThaisotHighscoresKeywordPage />;
}
