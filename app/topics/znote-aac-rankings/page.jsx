import ZnoteAacRankingsKeywordPage, { generateMetadata } from './znote-aac-rankings';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacRankingsKeywordPage />;
}
