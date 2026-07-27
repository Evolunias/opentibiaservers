import WithScreenshotsThorniaLoginKeywordPage, { generateMetadata } from './with-screenshots-thornia-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaLoginKeywordPage />;
}
