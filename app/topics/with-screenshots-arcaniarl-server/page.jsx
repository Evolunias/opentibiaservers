import WithScreenshotsArcaniarlServerKeywordPage, { generateMetadata } from './with-screenshots-arcaniarl-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArcaniarlServerKeywordPage />;
}
