import WithScreenshotsNostaltherKeywordPage, { generateMetadata } from './with-screenshots-nostalther';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNostaltherKeywordPage />;
}
