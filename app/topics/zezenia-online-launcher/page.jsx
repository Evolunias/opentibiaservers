import ZezeniaOnlineLauncherKeywordPage, { generateMetadata } from './zezenia-online-launcher';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineLauncherKeywordPage />;
}
