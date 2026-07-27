import YurotsSeasonalServerUkKeywordPage, { generateMetadata } from './yurots-seasonal-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSeasonalServerUkKeywordPage />;
}
