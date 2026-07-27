import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-thaisot-website');
}

export default function WithScreenshotsThaisotWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-thaisot-website" />;
}
