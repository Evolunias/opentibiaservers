import Xanteria13WithActivePlayersServerKeywordPage, { generateMetadata } from './xanteria-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria13WithActivePlayersServerKeywordPage />;
}
