import ZezeniaOnlineBrazilServersKeywordPage, { generateMetadata } from './zezenia-online-brazil-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineBrazilServersKeywordPage />;
}
