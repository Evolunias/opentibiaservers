import XanteraHighscoresKeywordPage, { generateMetadata } from './xantera-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraHighscoresKeywordPage />;
}
