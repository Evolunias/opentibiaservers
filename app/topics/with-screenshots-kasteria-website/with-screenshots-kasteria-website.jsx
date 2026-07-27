import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-kasteria-website');
}

export default function WithScreenshotsKasteriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-kasteria-website" />;
}
