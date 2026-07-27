import Xanteria12WithActivePlayersServerKeywordPage, { generateMetadata } from './xanteria-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria12WithActivePlayersServerKeywordPage />;
}
