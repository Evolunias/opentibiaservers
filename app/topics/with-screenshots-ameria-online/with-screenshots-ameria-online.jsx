import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-ameria-online');
}

export default function WithScreenshotsAmeriaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-ameria-online" />;
}
