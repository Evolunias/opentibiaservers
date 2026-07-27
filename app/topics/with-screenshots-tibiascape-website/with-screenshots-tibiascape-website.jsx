import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiascape-website');
}

export default function WithScreenshotsTibiascapeWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiascape-website" />;
}
