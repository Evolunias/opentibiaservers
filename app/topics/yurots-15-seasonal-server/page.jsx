import Yurots15SeasonalServerKeywordPage, { generateMetadata } from './yurots-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots15SeasonalServerKeywordPage />;
}
