import WithScreenshotsLumineraHighscoresKeywordPage, { generateMetadata } from './with-screenshots-luminera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraHighscoresKeywordPage />;
}
