import WithScreenshotsServerListChileKeywordPage, { generateMetadata } from './with-screenshots-server-list-chile';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerListChileKeywordPage />;
}
