import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-north-america');
}

export default function WithScreenshotsSeasonNorthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-north-america" />;
}
