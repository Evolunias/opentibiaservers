import Yurots86SeasonalServerKeywordPage, { generateMetadata } from './yurots-8-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots86SeasonalServerKeywordPage />;
}
