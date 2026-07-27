import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-ots');
}

export default function WithScreenshotsMediviaOtsKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-ots" />;
}
