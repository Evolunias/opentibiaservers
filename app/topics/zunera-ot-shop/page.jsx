import ZuneraOtShopKeywordPage, { generateMetadata } from './zunera-ot-shop';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZuneraOtShopKeywordPage />;
}
