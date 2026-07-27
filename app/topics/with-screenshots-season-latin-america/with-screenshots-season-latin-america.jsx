import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-latin-america');
}

export default function WithScreenshotsSeasonLatinAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-latin-america" />;
}
