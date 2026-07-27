import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-login');
}

export default function WithScreenshotsMediviaLoginKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-login" />;
}
