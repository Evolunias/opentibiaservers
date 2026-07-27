import ZuneraOt14PvpServerKeywordPage, { generateMetadata } from './zunera-ot-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt14PvpServerKeywordPage />;
}
