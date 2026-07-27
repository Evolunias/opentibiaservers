import ZezeniaOnlineLaunchKeywordPage, { generateMetadata } from './zezenia-online-launch';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineLaunchKeywordPage />;
}
