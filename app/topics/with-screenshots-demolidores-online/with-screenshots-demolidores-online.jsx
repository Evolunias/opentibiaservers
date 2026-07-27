import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-demolidores-online');
}

export default function WithScreenshotsDemolidoresOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-demolidores-online" />;
}
