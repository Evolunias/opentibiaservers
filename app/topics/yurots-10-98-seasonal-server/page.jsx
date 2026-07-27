import Yurots1098SeasonalServerKeywordPage, { generateMetadata } from './yurots-10-98-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots1098SeasonalServerKeywordPage />;
}
