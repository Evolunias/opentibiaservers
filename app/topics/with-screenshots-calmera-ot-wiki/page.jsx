import WithScreenshotsCalmeraOtWikiKeywordPage, { generateMetadata } from './with-screenshots-calmera-ot-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsCalmeraOtWikiKeywordPage />;
}
