import Yurots71SeasonalServerKeywordPage, { generateMetadata } from './yurots-7-1-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots71SeasonalServerKeywordPage />;
}
