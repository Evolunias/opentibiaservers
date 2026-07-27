import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera');
}

export default function WithScreenshotsBlazeraKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera" />;
}
