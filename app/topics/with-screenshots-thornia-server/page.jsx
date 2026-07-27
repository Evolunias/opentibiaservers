import WithScreenshotsThorniaServerKeywordPage, { generateMetadata } from './with-screenshots-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaServerKeywordPage />;
}
