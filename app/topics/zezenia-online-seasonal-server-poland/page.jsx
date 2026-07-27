import ZezeniaOnlineSeasonalServerPolandKeywordPage, { generateMetadata } from './zezenia-online-seasonal-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineSeasonalServerPolandKeywordPage />;
}
