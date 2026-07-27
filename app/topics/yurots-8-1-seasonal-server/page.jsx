import Yurots81SeasonalServerKeywordPage, { generateMetadata } from './yurots-8-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots81SeasonalServerKeywordPage />;
}
