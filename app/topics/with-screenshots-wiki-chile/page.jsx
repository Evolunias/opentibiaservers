import WithScreenshotsWikiChileKeywordPage, { generateMetadata } from './with-screenshots-wiki-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiChileKeywordPage />;
}
