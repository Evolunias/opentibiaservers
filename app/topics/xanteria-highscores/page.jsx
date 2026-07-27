import XanteriaHighscoresKeywordPage, { generateMetadata } from './xanteria-highscores';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaHighscoresKeywordPage />;
}
