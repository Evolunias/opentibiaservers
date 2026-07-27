import ZezeniaOnlineAlternativesKeywordPage, { generateMetadata } from './zezenia-online-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineAlternativesKeywordPage />;
}
