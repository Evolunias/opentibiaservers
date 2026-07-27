import YurotsWithActivePlayersServerSwedenKeywordPage, { generateMetadata } from './yurots-with-active-players-server-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWithActivePlayersServerSwedenKeywordPage />;
}
