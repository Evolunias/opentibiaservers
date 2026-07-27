import WithScreenshotsLumineraOtKeywordPage, { generateMetadata } from './with-screenshots-luminera-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLumineraOtKeywordPage />;
}
