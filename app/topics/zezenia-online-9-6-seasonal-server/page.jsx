import ZezeniaOnline96SeasonalServerKeywordPage, { generateMetadata } from './zezenia-online-9-6-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline96SeasonalServerKeywordPage />;
}
