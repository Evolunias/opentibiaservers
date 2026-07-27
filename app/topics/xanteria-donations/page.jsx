import XanteriaDonationsKeywordPage, { generateMetadata } from './xanteria-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaDonationsKeywordPage />;
}
