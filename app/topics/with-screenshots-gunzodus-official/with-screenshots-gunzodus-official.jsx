import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-official');
}

export default function WithScreenshotsGunzodusOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-official" />;
}
