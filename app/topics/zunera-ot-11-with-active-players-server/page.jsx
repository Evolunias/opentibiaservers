import ZuneraOt11WithActivePlayersServerKeywordPage, { generateMetadata } from './zunera-ot-11-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt11WithActivePlayersServerKeywordPage />;
}
