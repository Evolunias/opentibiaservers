import ZezeniaOnlineSeasonalServerUsaKeywordPage, { generateMetadata } from './zezenia-online-seasonal-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineSeasonalServerUsaKeywordPage />;
}
