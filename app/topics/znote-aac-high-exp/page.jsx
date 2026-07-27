import ZnoteAacHighExpKeywordPage, { generateMetadata } from './znote-aac-high-exp';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacHighExpKeywordPage />;
}
