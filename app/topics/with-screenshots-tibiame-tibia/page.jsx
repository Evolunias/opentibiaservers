import WithScreenshotsTibiameTibiaKeywordPage, { generateMetadata } from './with-screenshots-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiameTibiaKeywordPage />;
}
