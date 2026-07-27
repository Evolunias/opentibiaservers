import YurotsAlternativesKeywordPage, { generateMetadata } from './yurots-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsAlternativesKeywordPage />;
}
