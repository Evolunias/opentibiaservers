import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-login');
}

export default function WithScreenshotsGunzodusLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-login" />;
}
