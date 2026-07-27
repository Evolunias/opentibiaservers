import ZezeniaOnline15SeasonalServerKeywordPage, { generateMetadata } from './zezenia-online-15-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline15SeasonalServerKeywordPage />;
}
