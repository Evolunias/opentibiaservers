import WithScreenshotsNoxiousotKeywordPage, { generateMetadata } from './with-screenshots-noxiousot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNoxiousotKeywordPage />;
}
