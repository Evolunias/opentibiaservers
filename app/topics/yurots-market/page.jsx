import YurotsMarketKeywordPage, { generateMetadata } from './yurots-market';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsMarketKeywordPage />;
}
