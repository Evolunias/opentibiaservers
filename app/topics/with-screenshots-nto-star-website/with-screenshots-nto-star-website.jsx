import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-nto-star-website');
}

export default function WithScreenshotsNtoStarWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-nto-star-website" />;
}
