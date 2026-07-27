import ZezeniaOnlineUkServersKeywordPage, { generateMetadata } from './zezenia-online-uk-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineUkServersKeywordPage />;
}
