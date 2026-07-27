import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-register');
}

export default function WithScreenshotsGunzodusRegisterKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-register" />;
}
