import Yurots11PvpServerKeywordPage, { generateMetadata } from './yurots-11-pvp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11PvpServerKeywordPage />;
}
