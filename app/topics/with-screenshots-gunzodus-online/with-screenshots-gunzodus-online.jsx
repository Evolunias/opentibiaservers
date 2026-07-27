import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-online');
}

export default function WithScreenshotsGunzodusOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-online" />;
}
