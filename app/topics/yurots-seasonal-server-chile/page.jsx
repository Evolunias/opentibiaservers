import YurotsSeasonalServerChileKeywordPage, { generateMetadata } from './yurots-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsSeasonalServerChileKeywordPage />;
}
