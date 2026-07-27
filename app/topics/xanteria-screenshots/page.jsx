import XanteriaScreenshotsKeywordPage, { generateMetadata } from './xanteria-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <XanteriaScreenshotsKeywordPage />;
}
