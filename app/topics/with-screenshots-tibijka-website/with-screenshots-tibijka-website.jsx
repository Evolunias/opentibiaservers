import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibijka-website');
}

export default function WithScreenshotsTibijkaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibijka-website" />;
}
