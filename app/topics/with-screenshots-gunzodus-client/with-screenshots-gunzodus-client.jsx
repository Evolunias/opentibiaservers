import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-client');
}

export default function WithScreenshotsGunzodusClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-client" />;
}
