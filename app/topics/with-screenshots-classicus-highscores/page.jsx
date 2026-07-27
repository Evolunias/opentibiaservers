import WithScreenshotsClassicusHighscoresKeywordPage, { generateMetadata } from './with-screenshots-classicus-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsClassicusHighscoresKeywordPage />;
}
