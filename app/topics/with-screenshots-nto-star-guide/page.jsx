import WithScreenshotsNtoStarGuideKeywordPage, { generateMetadata } from './with-screenshots-nto-star-guide';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarGuideKeywordPage />;
}
