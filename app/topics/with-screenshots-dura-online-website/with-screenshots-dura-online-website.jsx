import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-website');
}

export default function WithScreenshotsDuraOnlineWebsiteKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-website" />;
}
