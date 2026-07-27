import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-aurera-global-online');
}

export default function WithScreenshotsAureraGlobalOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-aurera-global-online" />;
}
