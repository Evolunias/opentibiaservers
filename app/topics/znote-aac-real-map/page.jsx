import ZnoteAacRealMapKeywordPage, { generateMetadata } from './znote-aac-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacRealMapKeywordPage />;
}
