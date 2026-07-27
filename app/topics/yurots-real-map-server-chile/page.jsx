import YurotsRealMapServerChileKeywordPage, { generateMetadata } from './yurots-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsRealMapServerChileKeywordPage />;
}
