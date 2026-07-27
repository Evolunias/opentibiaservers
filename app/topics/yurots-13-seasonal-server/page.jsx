import Yurots13SeasonalServerKeywordPage, { generateMetadata } from './yurots-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots13SeasonalServerKeywordPage />;
}
