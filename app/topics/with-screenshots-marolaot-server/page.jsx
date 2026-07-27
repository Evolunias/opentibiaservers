import WithScreenshotsMarolaotServerKeywordPage, { generateMetadata } from './with-screenshots-marolaot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsMarolaotServerKeywordPage />;
}
