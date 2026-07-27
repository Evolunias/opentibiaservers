import WithScreenshotsGunzodusForumKeywordPage, { generateMetadata } from './with-screenshots-gunzodus-forum';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithScreenshotsGunzodusForumKeywordPage />;
}
