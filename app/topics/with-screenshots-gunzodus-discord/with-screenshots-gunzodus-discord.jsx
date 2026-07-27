import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-discord');
}

export default function WithScreenshotsGunzodusDiscordKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-discord" />;
}
