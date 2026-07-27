import ZnoteAacDownloadKeywordPage, { generateMetadata } from './znote-aac-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacDownloadKeywordPage />;
}
