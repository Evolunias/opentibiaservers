import XanteriaWikiKeywordPage, { generateMetadata } from './xanteria-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaWikiKeywordPage />;
}
