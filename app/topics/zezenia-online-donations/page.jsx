import ZezeniaOnlineDonationsKeywordPage, { generateMetadata } from './zezenia-online-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineDonationsKeywordPage />;
}
