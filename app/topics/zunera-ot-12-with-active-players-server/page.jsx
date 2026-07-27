import ZuneraOt12WithActivePlayersServerKeywordPage, { generateMetadata } from './zunera-ot-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt12WithActivePlayersServerKeywordPage />;
}
