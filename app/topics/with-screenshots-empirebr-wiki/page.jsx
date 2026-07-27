import WithScreenshotsEmpirebrWikiKeywordPage, { generateMetadata } from './with-screenshots-empirebr-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsEmpirebrWikiKeywordPage />;
}
