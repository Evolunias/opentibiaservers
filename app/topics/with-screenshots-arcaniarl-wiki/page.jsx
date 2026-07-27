import WithScreenshotsArcaniarlWikiKeywordPage, { generateMetadata } from './with-screenshots-arcaniarl-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsArcaniarlWikiKeywordPage />;
}
