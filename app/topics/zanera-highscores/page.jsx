import ZaneraHighscoresKeywordPage, { generateMetadata } from './zanera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraHighscoresKeywordPage />;
}
