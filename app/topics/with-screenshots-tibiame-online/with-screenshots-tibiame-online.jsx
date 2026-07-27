import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-online');
}

export default function WithScreenshotsTibiameOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-online" />;
}
