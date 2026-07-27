import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-mexico');
}

export default function WithScreenshotsSeasonMexicoKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-mexico" />;
}
