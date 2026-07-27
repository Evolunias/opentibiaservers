import ZnoteAacSwedenKeywordPage, { generateMetadata } from './znote-aac-sweden';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacSwedenKeywordPage />;
}
