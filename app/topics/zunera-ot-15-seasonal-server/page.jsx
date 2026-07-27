import ZuneraOt15SeasonalServerKeywordPage, { generateMetadata } from './zunera-ot-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOt15SeasonalServerKeywordPage />;
}
