import YurotsSeasonalServerGermanyKeywordPage, { generateMetadata } from './yurots-seasonal-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSeasonalServerGermanyKeywordPage />;
}
