import ZezeniaOnlineRealMapServerChileKeywordPage, { generateMetadata } from './zezenia-online-real-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineRealMapServerChileKeywordPage />;
}
