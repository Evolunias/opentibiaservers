import ZezeniaOnlineSimilarServersKeywordPage, { generateMetadata } from './zezenia-online-similar-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineSimilarServersKeywordPage />;
}
