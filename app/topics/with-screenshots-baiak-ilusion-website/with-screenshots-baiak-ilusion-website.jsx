import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-baiak-ilusion-website');
}

export default function WithScreenshotsBaiakIlusionWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-baiak-ilusion-website" />;
}
