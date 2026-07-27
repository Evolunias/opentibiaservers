import WithScreenshotsTibiaretroWikiKeywordPage, { generateMetadata } from './with-screenshots-tibiaretro-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiaretroWikiKeywordPage />;
}
