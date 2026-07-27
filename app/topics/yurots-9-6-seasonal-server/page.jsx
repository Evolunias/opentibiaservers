import Yurots96SeasonalServerKeywordPage, { generateMetadata } from './yurots-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Yurots96SeasonalServerKeywordPage />;
}
