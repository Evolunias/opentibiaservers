import WithScreenshotsArcaniarlHighscoresKeywordPage, { generateMetadata } from './with-screenshots-arcaniarl-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArcaniarlHighscoresKeywordPage />;
}
