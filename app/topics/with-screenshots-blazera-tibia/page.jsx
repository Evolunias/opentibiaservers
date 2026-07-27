import WithScreenshotsBlazeraTibiaKeywordPage, { generateMetadata } from './with-screenshots-blazera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsBlazeraTibiaKeywordPage />;
}
