import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-guide');
}

export default function WithScreenshotsNepreniaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-guide" />;
}
