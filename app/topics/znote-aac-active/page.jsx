import ZnoteAacActiveKeywordPage, { generateMetadata } from './znote-aac-active';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacActiveKeywordPage />;
}
