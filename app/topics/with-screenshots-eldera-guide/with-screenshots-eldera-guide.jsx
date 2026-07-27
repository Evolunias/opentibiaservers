import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-eldera-guide');
}

export default function WithScreenshotsElderaGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-eldera-guide" />;
}
