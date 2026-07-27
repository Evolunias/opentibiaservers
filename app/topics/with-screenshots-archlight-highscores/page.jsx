import WithScreenshotsArchlightHighscoresKeywordPage, { generateMetadata } from './with-screenshots-archlight-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArchlightHighscoresKeywordPage />;
}
