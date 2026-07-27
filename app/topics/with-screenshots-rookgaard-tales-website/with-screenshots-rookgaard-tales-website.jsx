import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-rookgaard-tales-website');
}

export default function WithScreenshotsRookgaardTalesWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-rookgaard-tales-website" />;
}
