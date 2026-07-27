import WithScreenshotsKasteriaHighscoresKeywordPage, { generateMetadata } from './with-screenshots-kasteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsKasteriaHighscoresKeywordPage />;
}
