import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-ot');
}

export default function WithScreenshotsMediviaOtKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-ot" />;
}
