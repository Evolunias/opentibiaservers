import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiantis-online');
}

export default function WithScreenshotsTibiantisOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiantis-online" />;
}
