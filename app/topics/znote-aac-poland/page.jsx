import ZnoteAacPolandKeywordPage, { generateMetadata } from './znote-aac-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacPolandKeywordPage />;
}
