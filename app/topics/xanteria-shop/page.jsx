import XanteriaShopKeywordPage, { generateMetadata } from './xanteria-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaShopKeywordPage />;
}
