import ZezeniaOnlineRetroServerPolandKeywordPage, { generateMetadata } from './zezenia-online-retro-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineRetroServerPolandKeywordPage />;
}
