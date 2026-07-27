import XanteraRareItemsKeywordPage, { generateMetadata } from './xantera-rare-items';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraRareItemsKeywordPage />;
}
