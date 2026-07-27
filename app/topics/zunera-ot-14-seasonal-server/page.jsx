import ZuneraOt14SeasonalServerKeywordPage, { generateMetadata } from './zunera-ot-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt14SeasonalServerKeywordPage />;
}
