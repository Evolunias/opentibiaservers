import YurotsDownloadKeywordPage, { generateMetadata } from './yurots-download';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <YurotsDownloadKeywordPage />;
}
