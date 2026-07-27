import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-guide');
}

export default function WithScreenshotsNtoStarGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-guide" />;
}
