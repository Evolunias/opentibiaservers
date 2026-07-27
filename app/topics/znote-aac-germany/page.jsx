import ZnoteAacGermanyKeywordPage, { generateMetadata } from './znote-aac-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacGermanyKeywordPage />;
}
