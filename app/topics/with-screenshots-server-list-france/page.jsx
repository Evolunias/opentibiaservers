import WithScreenshotsServerListFranceKeywordPage, { generateMetadata } from './with-screenshots-server-list-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerListFranceKeywordPage />;
}
