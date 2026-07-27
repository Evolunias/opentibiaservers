import ZezeniaOnline14SeasonalServerKeywordPage, { generateMetadata } from './zezenia-online-14-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline14SeasonalServerKeywordPage />;
}
