import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-guide');
}

export default function WithScreenshotsOriginaltibiaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-guide" />;
}
