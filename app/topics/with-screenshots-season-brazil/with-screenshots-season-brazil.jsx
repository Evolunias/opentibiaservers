import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-brazil');
}

export default function WithScreenshotsSeasonBrazilKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-brazil" />;
}
