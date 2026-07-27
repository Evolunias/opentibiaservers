import WithScreenshotsSerenityHighscoresKeywordPage, { generateMetadata } from './with-screenshots-serenity-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSerenityHighscoresKeywordPage />;
}
