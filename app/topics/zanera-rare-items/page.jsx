import ZaneraRareItemsKeywordPage, { generateMetadata } from './zanera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraRareItemsKeywordPage />;
}
