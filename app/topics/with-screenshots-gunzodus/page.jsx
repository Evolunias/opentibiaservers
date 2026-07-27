import WithScreenshotsGunzodusKeywordPage, { generateMetadata } from './with-screenshots-gunzodus';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsGunzodusKeywordPage />;
}
