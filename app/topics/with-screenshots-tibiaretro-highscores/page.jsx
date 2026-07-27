import WithScreenshotsTibiaretroHighscoresKeywordPage, { generateMetadata } from './with-screenshots-tibiaretro-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaretroHighscoresKeywordPage />;
}
