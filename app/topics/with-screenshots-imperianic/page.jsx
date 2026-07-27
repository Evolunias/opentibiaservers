import WithScreenshotsImperianicKeywordPage, { generateMetadata } from './with-screenshots-imperianic';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsImperianicKeywordPage />;
}
