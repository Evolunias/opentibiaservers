import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-client');
}

export default function WithScreenshotsMediviaClientKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-client" />;
}
