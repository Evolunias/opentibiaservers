import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-usa');
}

export default function WithScreenshotsSeasonUsaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-usa" />;
}
