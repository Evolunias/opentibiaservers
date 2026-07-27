import ZuneraOt12SeasonalServerKeywordPage, { generateMetadata } from './zunera-ot-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt12SeasonalServerKeywordPage />;
}
