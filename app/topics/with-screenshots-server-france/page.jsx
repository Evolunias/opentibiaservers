import WithScreenshotsServerFranceKeywordPage, { generateMetadata } from './with-screenshots-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsServerFranceKeywordPage />;
}
