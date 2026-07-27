import WithScreenshotsShadowcoresHighscoresKeywordPage, { generateMetadata } from './with-screenshots-shadowcores-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsShadowcoresHighscoresKeywordPage />;
}
