import XanteraAlternativesKeywordPage, { generateMetadata } from './xantera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteraAlternativesKeywordPage />;
}
