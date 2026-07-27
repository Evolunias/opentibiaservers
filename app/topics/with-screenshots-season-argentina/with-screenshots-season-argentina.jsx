import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-argentina');
}

export default function WithScreenshotsSeasonArgentinaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-argentina" />;
}
