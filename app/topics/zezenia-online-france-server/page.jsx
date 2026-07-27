import ZezeniaOnlineFranceServerKeywordPage, { generateMetadata } from './zezenia-online-france-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineFranceServerKeywordPage />;
}
