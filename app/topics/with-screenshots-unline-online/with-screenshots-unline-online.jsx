import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-unline-online');
}

export default function WithScreenshotsUnlineOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-unline-online" />;
}
