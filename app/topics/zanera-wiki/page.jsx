import ZaneraWikiKeywordPage, { generateMetadata } from './zanera-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ZaneraWikiKeywordPage />;
}
