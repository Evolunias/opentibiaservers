import ZuneraOt100SeasonalServerKeywordPage, { generateMetadata } from './zunera-ot-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt100SeasonalServerKeywordPage />;
}
