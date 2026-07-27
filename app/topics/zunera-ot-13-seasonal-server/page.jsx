import ZuneraOt13SeasonalServerKeywordPage, { generateMetadata } from './zunera-ot-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt13SeasonalServerKeywordPage />;
}
