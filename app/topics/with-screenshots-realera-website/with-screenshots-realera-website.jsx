import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-realera-website');
}

export default function WithScreenshotsRealeraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-realera-website" />;
}
