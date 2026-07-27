import Yurots14WithActivePlayersServerKeywordPage, { generateMetadata } from './yurots-14-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots14WithActivePlayersServerKeywordPage />;
}
