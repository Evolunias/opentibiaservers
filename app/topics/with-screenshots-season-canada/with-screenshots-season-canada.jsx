import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-canada');
}

export default function WithScreenshotsSeasonCanadaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-canada" />;
}
