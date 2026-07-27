import WithScreenshotsCarlinotClientKeywordPage, { generateMetadata } from './with-screenshots-carlinot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCarlinotClientKeywordPage />;
}
