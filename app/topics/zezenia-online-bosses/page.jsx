import ZezeniaOnlineBossesKeywordPage, { generateMetadata } from './zezenia-online-bosses';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineBossesKeywordPage />;
}
