import Yurots12SeasonalServerKeywordPage, { generateMetadata } from './yurots-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots12SeasonalServerKeywordPage />;
}
