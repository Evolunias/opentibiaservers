import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-tibia');
}

export default function WithScreenshotsGunzodusTibiaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-tibia" />;
}
