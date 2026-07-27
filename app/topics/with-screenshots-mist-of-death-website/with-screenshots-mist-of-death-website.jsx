import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-mist-of-death-website');
}

export default function WithScreenshotsMistOfDeathWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-mist-of-death-website" />;
}
