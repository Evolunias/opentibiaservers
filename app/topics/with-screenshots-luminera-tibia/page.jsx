import WithScreenshotsLumineraTibiaKeywordPage, { generateMetadata } from './with-screenshots-luminera-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraTibiaKeywordPage />;
}
