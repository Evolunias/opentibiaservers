import WithScreenshotsGunzodusWikiKeywordPage, { generateMetadata } from './with-screenshots-gunzodus-wiki';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsGunzodusWikiKeywordPage />;
}
