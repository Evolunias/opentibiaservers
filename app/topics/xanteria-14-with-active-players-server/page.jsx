import Xanteria14WithActivePlayersServerKeywordPage, { generateMetadata } from './xanteria-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Xanteria14WithActivePlayersServerKeywordPage />;
}
