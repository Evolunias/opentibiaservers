import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-website');
}

export default function WithScreenshotsArchlightWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-website" />;
}
