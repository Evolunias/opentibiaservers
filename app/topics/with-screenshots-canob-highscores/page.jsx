import WithScreenshotsCanobHighscoresKeywordPage, { generateMetadata } from './with-screenshots-canob-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCanobHighscoresKeywordPage />;
}
