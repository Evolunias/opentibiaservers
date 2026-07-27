import ZnoteAac2026KeywordPage, { generateMetadata } from './znote-aac-2026';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAac2026KeywordPage />;
}
