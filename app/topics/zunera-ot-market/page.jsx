import ZuneraOtMarketKeywordPage, { generateMetadata } from './zunera-ot-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtMarketKeywordPage />;
}
