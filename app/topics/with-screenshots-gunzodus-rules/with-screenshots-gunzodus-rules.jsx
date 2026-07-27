import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-rules');
}

export default function WithScreenshotsGunzodusRulesKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-rules" />;
}
