import WithScreenshotsYurotsHighscoresKeywordPage, { generateMetadata } from './with-screenshots-yurots-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsYurotsHighscoresKeywordPage />;
}
