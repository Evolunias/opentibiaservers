import ZezeniaOnlineEventsKeywordPage, { generateMetadata } from './zezenia-online-events';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZezeniaOnlineEventsKeywordPage />;
}
