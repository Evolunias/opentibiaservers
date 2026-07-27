import Yurots84SeasonalServerKeywordPage, { generateMetadata } from './yurots-8-4-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots84SeasonalServerKeywordPage />;
}
