import ZnoteAacOnlineKeywordPage, { generateMetadata } from './znote-aac-online';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacOnlineKeywordPage />;
}
