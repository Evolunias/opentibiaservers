import WithScreenshotsNoxiousotWikiKeywordPage, { generateMetadata } from './with-screenshots-noxiousot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNoxiousotWikiKeywordPage />;
}
