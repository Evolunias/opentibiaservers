import ZezeniaOnlineBrazilServerKeywordPage, { generateMetadata } from './zezenia-online-brazil-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineBrazilServerKeywordPage />;
}
