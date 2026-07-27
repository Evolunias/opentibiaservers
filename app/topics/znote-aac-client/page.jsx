import ZnoteAacClientKeywordPage, { generateMetadata } from './znote-aac-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacClientKeywordPage />;
}
