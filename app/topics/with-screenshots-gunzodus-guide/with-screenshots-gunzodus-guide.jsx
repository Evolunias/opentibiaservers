import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-guide');
}

export default function WithScreenshotsGunzodusGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-guide" />;
}
