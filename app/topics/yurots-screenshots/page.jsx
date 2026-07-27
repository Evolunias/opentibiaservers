import YurotsScreenshotsKeywordPage, { generateMetadata } from './yurots-screenshots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsScreenshotsKeywordPage />;
}
