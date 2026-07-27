import YurotsOnlineKeywordPage, { generateMetadata } from './yurots-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsOnlineKeywordPage />;
}
