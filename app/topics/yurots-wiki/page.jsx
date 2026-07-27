import YurotsWikiKeywordPage, { generateMetadata } from './yurots-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsWikiKeywordPage />;
}
