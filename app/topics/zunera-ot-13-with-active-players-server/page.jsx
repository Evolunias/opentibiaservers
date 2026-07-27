import ZuneraOt13WithActivePlayersServerKeywordPage, { generateMetadata } from './zunera-ot-13-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt13WithActivePlayersServerKeywordPage />;
}
