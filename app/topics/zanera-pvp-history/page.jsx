import ZaneraPvpHistoryKeywordPage, { generateMetadata } from './zanera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraPvpHistoryKeywordPage />;
}
