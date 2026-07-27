import XanteriaAlternativesKeywordPage, { generateMetadata } from './xanteria-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaAlternativesKeywordPage />;
}
