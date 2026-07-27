import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-uk');
}

export default function WithScreenshotsSeasonUkKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-uk" />;
}
