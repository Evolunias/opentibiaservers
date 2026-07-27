import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiara-website');
}

export default function WithScreenshotsTibiaraWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiara-website" />;
}
