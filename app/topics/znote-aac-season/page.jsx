import ZnoteAacSeasonKeywordPage, { generateMetadata } from './znote-aac-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacSeasonKeywordPage />;
}
