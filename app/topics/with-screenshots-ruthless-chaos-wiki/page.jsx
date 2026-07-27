import WithScreenshotsRuthlessChaosWikiKeywordPage, { generateMetadata } from './with-screenshots-ruthless-chaos-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsRuthlessChaosWikiKeywordPage />;
}
