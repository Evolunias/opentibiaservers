import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-otmadness-online');
}

export default function WithScreenshotsOtmadnessOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-otmadness-online" />;
}
