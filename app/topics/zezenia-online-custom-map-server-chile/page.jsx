import ZezeniaOnlineCustomMapServerChileKeywordPage, { generateMetadata } from './zezenia-online-custom-map-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineCustomMapServerChileKeywordPage />;
}
