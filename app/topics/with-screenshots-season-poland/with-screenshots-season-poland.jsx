import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-poland');
}

export default function WithScreenshotsSeasonPolandKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-poland" />;
}
