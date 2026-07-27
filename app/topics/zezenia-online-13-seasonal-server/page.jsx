import ZezeniaOnline13SeasonalServerKeywordPage, { generateMetadata } from './zezenia-online-13-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline13SeasonalServerKeywordPage />;
}
