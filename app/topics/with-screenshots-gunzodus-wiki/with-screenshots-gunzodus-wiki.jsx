import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-gunzodus-wiki');
}

export default function WithScreenshotsGunzodusWikiKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-gunzodus-wiki" />;
}
