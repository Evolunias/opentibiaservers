import WithScreenshotsXanteriaKeywordPage, { generateMetadata } from './with-screenshots-xanteria';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsXanteriaKeywordPage />;
}
