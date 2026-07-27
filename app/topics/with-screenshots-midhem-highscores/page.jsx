import WithScreenshotsMidhemHighscoresKeywordPage, { generateMetadata } from './with-screenshots-midhem-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMidhemHighscoresKeywordPage />;
}
