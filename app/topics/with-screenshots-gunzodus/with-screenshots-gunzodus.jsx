import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus');
}

export default function WithScreenshotsGunzodusKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus" />;
}
