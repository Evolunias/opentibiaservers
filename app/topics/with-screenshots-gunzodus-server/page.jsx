import WithScreenshotsGunzodusServerKeywordPage, { generateMetadata } from './with-screenshots-gunzodus-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsGunzodusServerKeywordPage />;
}
