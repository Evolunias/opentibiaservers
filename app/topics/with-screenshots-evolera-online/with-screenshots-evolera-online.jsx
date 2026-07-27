import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-evolera-online');
}

export default function WithScreenshotsEvoleraOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-evolera-online" />;
}
