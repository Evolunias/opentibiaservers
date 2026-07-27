import Yurots15WithActivePlayersServerKeywordPage, { generateMetadata } from './yurots-15-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15WithActivePlayersServerKeywordPage />;
}
