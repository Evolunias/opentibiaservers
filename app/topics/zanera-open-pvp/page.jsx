import ZaneraOpenPvpKeywordPage, { generateMetadata } from './zanera-open-pvp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraOpenPvpKeywordPage />;
}
