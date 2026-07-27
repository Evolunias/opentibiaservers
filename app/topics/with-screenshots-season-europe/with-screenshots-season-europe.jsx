import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-europe');
}

export default function WithScreenshotsSeasonEuropeKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-europe" />;
}
