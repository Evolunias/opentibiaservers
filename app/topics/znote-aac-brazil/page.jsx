import ZnoteAacBrazilKeywordPage, { generateMetadata } from './znote-aac-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZnoteAacBrazilKeywordPage />;
}
