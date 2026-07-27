import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-highscores');
}

export default function WithScreenshotsGunzodusHighscoresKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-highscores" />;
}
