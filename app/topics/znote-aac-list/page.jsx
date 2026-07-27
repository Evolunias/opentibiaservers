import ZnoteAacListKeywordPage, { generateMetadata } from './znote-aac-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacListKeywordPage />;
}
