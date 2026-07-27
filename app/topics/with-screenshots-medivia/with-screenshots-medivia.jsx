import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia');
}

export default function WithScreenshotsMediviaKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia" />;
}
