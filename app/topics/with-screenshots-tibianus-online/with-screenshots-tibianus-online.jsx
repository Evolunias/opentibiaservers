import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibianus-online');
}

export default function WithScreenshotsTibianusOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibianus-online" />;
}
