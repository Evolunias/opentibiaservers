import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-server');
}

export default function WithScreenshotsMediviaServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-server" />;
}
