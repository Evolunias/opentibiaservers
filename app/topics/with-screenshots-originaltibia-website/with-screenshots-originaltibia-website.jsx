import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-originaltibia-website');
}

export default function WithScreenshotsOriginaltibiaWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-originaltibia-website" />;
}
