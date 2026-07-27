import WithScreenshotsNilotHighscoresKeywordPage, { generateMetadata } from './with-screenshots-nilot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNilotHighscoresKeywordPage />;
}
