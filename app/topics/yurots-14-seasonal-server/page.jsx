import Yurots14SeasonalServerKeywordPage, { generateMetadata } from './yurots-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots14SeasonalServerKeywordPage />;
}
