import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-saintsot-online');
}

export default function WithScreenshotsSaintsotOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-saintsot-online" />;
}
