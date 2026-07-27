import WithScreenshotsThorniaKeywordPage, { generateMetadata } from './with-screenshots-thornia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsThorniaKeywordPage />;
}
