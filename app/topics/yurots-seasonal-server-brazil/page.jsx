import YurotsSeasonalServerBrazilKeywordPage, { generateMetadata } from './yurots-seasonal-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSeasonalServerBrazilKeywordPage />;
}
