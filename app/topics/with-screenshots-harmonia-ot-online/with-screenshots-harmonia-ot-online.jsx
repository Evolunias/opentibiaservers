import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-harmonia-ot-online');
}

export default function WithScreenshotsHarmoniaOtOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-harmonia-ot-online" />;
}
