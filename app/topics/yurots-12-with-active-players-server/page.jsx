import Yurots12WithActivePlayersServerKeywordPage, { generateMetadata } from './yurots-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12WithActivePlayersServerKeywordPage />;
}
