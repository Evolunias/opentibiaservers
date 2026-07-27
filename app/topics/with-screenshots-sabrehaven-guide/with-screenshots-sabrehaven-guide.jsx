import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-sabrehaven-guide');
}

export default function WithScreenshotsSabrehavenGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-sabrehaven-guide" />;
}
