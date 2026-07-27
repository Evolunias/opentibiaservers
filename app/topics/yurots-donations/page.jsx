import YurotsDonationsKeywordPage, { generateMetadata } from './yurots-donations';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsDonationsKeywordPage />;
}
