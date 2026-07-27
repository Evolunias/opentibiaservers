import WithScreenshotsRubinotHighscoresKeywordPage, { generateMetadata } from './with-screenshots-rubinot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRubinotHighscoresKeywordPage />;
}
