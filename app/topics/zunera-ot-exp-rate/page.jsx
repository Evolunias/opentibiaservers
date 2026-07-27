import ZuneraOtExpRateKeywordPage, { generateMetadata } from './zunera-ot-exp-rate';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtExpRateKeywordPage />;
}
