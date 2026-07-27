import WithScreenshotsWikiNorthAmericaKeywordPage, { generateMetadata } from './with-screenshots-wiki-north-america';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiNorthAmericaKeywordPage />;
}
