import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online-guide');
}

export default function WithScreenshotsDuraOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online-guide" />;
}
