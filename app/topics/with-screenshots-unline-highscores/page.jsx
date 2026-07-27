import WithScreenshotsUnlineHighscoresKeywordPage, { generateMetadata } from './with-screenshots-unline-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsUnlineHighscoresKeywordPage />;
}
