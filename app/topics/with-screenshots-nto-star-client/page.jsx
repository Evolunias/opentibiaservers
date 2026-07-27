import WithScreenshotsNtoStarClientKeywordPage, { generateMetadata } from './with-screenshots-nto-star-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsNtoStarClientKeywordPage />;
}
