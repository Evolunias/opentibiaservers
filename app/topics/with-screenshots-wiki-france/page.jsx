import WithScreenshotsWikiFranceKeywordPage, { generateMetadata } from './with-screenshots-wiki-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsWikiFranceKeywordPage />;
}
