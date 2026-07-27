import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-guide');
}

export default function WithScreenshotsBlazeraGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-guide" />;
}
