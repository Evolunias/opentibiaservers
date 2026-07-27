import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-medivia-website');
}

export default function WithScreenshotsMediviaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-medivia-website" />;
}
