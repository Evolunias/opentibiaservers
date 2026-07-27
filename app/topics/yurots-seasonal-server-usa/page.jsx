import YurotsSeasonalServerUsaKeywordPage, { generateMetadata } from './yurots-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSeasonalServerUsaKeywordPage />;
}
