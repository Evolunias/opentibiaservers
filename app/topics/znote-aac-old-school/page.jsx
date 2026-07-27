import ZnoteAacOldSchoolKeywordPage, { generateMetadata } from './znote-aac-old-school';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacOldSchoolKeywordPage />;
}
