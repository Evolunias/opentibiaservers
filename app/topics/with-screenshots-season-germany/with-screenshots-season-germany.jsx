import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-germany');
}

export default function WithScreenshotsSeasonGermanyKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-germany" />;
}
