import ZuneraOt11PvpServerKeywordPage, { generateMetadata } from './zunera-ot-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt11PvpServerKeywordPage />;
}
