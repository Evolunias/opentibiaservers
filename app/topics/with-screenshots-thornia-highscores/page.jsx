import WithScreenshotsThorniaHighscoresKeywordPage, { generateMetadata } from './with-screenshots-thornia-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaHighscoresKeywordPage />;
}
