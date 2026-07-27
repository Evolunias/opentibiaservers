import ZnoteAacEuropeKeywordPage, { generateMetadata } from './znote-aac-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacEuropeKeywordPage />;
}
