import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-server');
}

export default function WithScreenshotsGunzodusServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-server" />;
}
