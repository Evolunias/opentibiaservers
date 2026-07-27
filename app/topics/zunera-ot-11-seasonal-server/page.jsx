import ZuneraOt11SeasonalServerKeywordPage, { generateMetadata } from './zunera-ot-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt11SeasonalServerKeywordPage />;
}
