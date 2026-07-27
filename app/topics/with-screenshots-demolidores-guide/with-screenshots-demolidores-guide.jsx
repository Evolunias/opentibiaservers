import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-guide');
}

export default function WithScreenshotsDemolidoresGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-guide" />;
}
