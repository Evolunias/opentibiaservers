import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-blazera-online');
}

export default function WithScreenshotsBlazeraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-blazera-online" />;
}
