import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-season-sweden');
}

export default function WithScreenshotsSeasonSwedenKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-season-sweden" />;
}
