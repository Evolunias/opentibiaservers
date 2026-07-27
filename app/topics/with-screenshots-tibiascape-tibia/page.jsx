import WithScreenshotsTibiascapeTibiaKeywordPage, { generateMetadata } from './with-screenshots-tibiascape-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsTibiascapeTibiaKeywordPage />;
}
