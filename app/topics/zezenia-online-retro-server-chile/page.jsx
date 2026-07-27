import ZezeniaOnlineRetroServerChileKeywordPage, { generateMetadata } from './zezenia-online-retro-server-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineRetroServerChileKeywordPage />;
}
