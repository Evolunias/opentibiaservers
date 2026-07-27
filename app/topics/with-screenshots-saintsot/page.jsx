import WithScreenshotsSaintsotKeywordPage, { generateMetadata } from './with-screenshots-saintsot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsSaintsotKeywordPage />;
}
