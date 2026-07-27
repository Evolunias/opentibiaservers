import ZezeniaOnlineCommandsKeywordPage, { generateMetadata } from './zezenia-online-commands';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineCommandsKeywordPage />;
}
