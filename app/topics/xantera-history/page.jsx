import XanteraHistoryKeywordPage, { generateMetadata } from './xantera-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraHistoryKeywordPage />;
}
