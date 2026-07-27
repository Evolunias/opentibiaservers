import ZezeniaOnline11SeasonalServerKeywordPage, { generateMetadata } from './zezenia-online-11-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline11SeasonalServerKeywordPage />;
}
