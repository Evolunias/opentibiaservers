import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-neprenia-website');
}

export default function WithScreenshotsNepreniaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-neprenia-website" />;
}
