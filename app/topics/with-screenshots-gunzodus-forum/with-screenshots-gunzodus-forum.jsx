import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-forum');
}

export default function WithScreenshotsGunzodusForumKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-forum" />;
}
