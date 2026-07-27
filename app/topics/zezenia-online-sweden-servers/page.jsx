import ZezeniaOnlineSwedenServersKeywordPage, { generateMetadata } from './zezenia-online-sweden-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineSwedenServersKeywordPage />;
}
