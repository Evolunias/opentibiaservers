import Yurots11WithActivePlayersServerKeywordPage, { generateMetadata } from './yurots-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11WithActivePlayersServerKeywordPage />;
}
