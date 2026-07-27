import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-dura-online');
}

export default function WithScreenshotsDuraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-dura-online" />;
}
