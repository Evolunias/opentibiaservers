import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-imperianic-website');
}

export default function WithScreenshotsImperianicWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-imperianic-website" />;
}
