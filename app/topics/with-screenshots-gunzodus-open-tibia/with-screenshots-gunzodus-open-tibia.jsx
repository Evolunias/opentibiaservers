import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-open-tibia');
}

export default function WithScreenshotsGunzodusOpenTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-open-tibia" />;
}
