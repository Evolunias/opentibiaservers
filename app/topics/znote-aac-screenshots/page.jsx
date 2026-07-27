import ZnoteAacScreenshotsKeywordPage, { generateMetadata } from './znote-aac-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacScreenshotsKeywordPage />;
}
