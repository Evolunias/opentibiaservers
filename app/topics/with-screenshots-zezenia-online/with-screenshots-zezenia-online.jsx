import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-zezenia-online');
}

export default function WithScreenshotsZezeniaOnlineKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-zezenia-online" />;
}
