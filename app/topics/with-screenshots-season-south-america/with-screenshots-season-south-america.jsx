import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-south-america');
}

export default function WithScreenshotsSeasonSouthAmericaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-south-america" />;
}
