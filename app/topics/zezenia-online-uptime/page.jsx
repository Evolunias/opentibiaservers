import ZezeniaOnlineUptimeKeywordPage, { generateMetadata } from './zezenia-online-uptime';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineUptimeKeywordPage />;
}
