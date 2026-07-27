import WithScreenshotsXanteriaServerKeywordPage, { generateMetadata } from './with-screenshots-xanteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsXanteriaServerKeywordPage />;
}
