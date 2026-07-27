import Yurots74SeasonalServerKeywordPage, { generateMetadata } from './yurots-7-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots74SeasonalServerKeywordPage />;
}
