import Yurots100SeasonalServerKeywordPage, { generateMetadata } from './yurots-10-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots100SeasonalServerKeywordPage />;
}
