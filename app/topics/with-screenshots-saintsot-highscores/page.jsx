import WithScreenshotsSaintsotHighscoresKeywordPage, { generateMetadata } from './with-screenshots-saintsot-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSaintsotHighscoresKeywordPage />;
}
