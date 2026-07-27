import ZuneraOtDonationsKeywordPage, { generateMetadata } from './zunera-ot-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtDonationsKeywordPage />;
}
