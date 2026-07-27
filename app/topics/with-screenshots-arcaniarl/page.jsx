import WithScreenshotsArcaniarlKeywordPage, { generateMetadata } from './with-screenshots-arcaniarl';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArcaniarlKeywordPage />;
}
