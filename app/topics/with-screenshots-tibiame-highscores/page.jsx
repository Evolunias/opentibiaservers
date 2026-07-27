import WithScreenshotsTibiameHighscoresKeywordPage, { generateMetadata } from './with-screenshots-tibiame-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiameHighscoresKeywordPage />;
}
