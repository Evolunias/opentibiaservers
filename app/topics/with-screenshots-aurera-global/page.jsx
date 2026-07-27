import WithScreenshotsAureraGlobalKeywordPage, { generateMetadata } from './with-screenshots-aurera-global';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsAureraGlobalKeywordPage />;
}
