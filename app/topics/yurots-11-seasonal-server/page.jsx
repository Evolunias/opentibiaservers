import Yurots11SeasonalServerKeywordPage, { generateMetadata } from './yurots-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots11SeasonalServerKeywordPage />;
}
