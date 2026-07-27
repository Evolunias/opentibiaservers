import XanteriaSeasonalServerChileKeywordPage, { generateMetadata } from './xanteria-seasonal-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaSeasonalServerChileKeywordPage />;
}
