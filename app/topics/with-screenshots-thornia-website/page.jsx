import WithScreenshotsThorniaWebsiteKeywordPage, { generateMetadata } from './with-screenshots-thornia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaWebsiteKeywordPage />;
}
