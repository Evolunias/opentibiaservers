import WithScreenshotsLaunchUsaKeywordPage, { generateMetadata } from './with-screenshots-launch-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsLaunchUsaKeywordPage />;
}
