import ZezeniaOnlineWarsKeywordPage, { generateMetadata } from './zezenia-online-wars';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineWarsKeywordPage />;
}
