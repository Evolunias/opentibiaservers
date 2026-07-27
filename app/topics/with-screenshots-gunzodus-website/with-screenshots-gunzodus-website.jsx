import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-website');
}

export default function WithScreenshotsGunzodusWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-website" />;
}
