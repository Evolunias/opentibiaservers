import WithScreenshotsVenoreotHighscoresKeywordPage, { generateMetadata } from './with-screenshots-venoreot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsVenoreotHighscoresKeywordPage />;
}
