import XanteraOpenPvpKeywordPage, { generateMetadata } from './xantera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraOpenPvpKeywordPage />;
}
