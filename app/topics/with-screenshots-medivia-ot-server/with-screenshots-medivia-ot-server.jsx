import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-ot-server');
}

export default function WithScreenshotsMediviaOtServerKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-ot-server" />;
}
