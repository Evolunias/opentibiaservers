import ZezeniaOnline12SeasonalServerKeywordPage, { generateMetadata } from './zezenia-online-12-seasonal-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnline12SeasonalServerKeywordPage />;
}
