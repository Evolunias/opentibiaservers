import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-ots');
}

export default function WithScreenshotsGunzodusOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-ots" />;
}
