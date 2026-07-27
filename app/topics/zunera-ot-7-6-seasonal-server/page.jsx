import ZuneraOt76SeasonalServerKeywordPage, { generateMetadata } from './zunera-ot-7-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt76SeasonalServerKeywordPage />;
}
