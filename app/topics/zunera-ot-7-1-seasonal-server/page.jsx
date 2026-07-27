import ZuneraOt71SeasonalServerKeywordPage, { generateMetadata } from './zunera-ot-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt71SeasonalServerKeywordPage />;
}
