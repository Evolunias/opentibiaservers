import WithScreenshotsTibiantisHighscoresKeywordPage, { generateMetadata } from './with-screenshots-tibiantis-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiantisHighscoresKeywordPage />;
}
