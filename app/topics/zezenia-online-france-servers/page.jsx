import ZezeniaOnlineFranceServersKeywordPage, { generateMetadata } from './zezenia-online-france-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineFranceServersKeywordPage />;
}
