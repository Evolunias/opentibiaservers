import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-official');
}

export default function WithScreenshotsMediviaOfficialKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-official" />;
}
