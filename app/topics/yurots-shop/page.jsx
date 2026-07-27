import YurotsShopKeywordPage, { generateMetadata } from './yurots-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsShopKeywordPage />;
}
