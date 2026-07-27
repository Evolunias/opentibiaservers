import WithScreenshotsTibianusTibiaKeywordPage, { generateMetadata } from './with-screenshots-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibianusTibiaKeywordPage />;
}
