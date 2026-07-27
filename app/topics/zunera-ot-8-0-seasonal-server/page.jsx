import ZuneraOt80SeasonalServerKeywordPage, { generateMetadata } from './zunera-ot-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt80SeasonalServerKeywordPage />;
}
