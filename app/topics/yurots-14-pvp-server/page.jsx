import Yurots14PvpServerKeywordPage, { generateMetadata } from './yurots-14-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots14PvpServerKeywordPage />;
}
