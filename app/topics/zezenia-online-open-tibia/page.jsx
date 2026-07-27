import ZezeniaOnlineOpenTibiaKeywordPage, { generateMetadata } from './zezenia-online-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineOpenTibiaKeywordPage />;
}
