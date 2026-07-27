import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realesta-website');
}

export default function WithScreenshotsRealestaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realesta-website" />;
}
