import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classick-drakoria-website');
}

export default function WithScreenshotsClassickDrakoriaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classick-drakoria-website" />;
}
