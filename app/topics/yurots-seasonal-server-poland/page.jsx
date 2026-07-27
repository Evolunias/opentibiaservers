import YurotsSeasonalServerPolandKeywordPage, { generateMetadata } from './yurots-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSeasonalServerPolandKeywordPage />;
}
