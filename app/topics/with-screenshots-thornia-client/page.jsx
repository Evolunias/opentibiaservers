import WithScreenshotsThorniaClientKeywordPage, { generateMetadata } from './with-screenshots-thornia-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaClientKeywordPage />;
}
