import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-archlight-guide');
}

export default function WithScreenshotsArchlightGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-archlight-guide" />;
}
