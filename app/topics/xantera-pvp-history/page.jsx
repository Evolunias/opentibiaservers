import XanteraPvpHistoryKeywordPage, { generateMetadata } from './xantera-pvp-history';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraPvpHistoryKeywordPage />;
}
