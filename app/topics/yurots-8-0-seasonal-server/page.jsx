import Yurots80SeasonalServerKeywordPage, { generateMetadata } from './yurots-8-0-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots80SeasonalServerKeywordPage />;
}
