import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-zezenia-online-guide');
}

export default function WithScreenshotsZezeniaOnlineGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-zezenia-online-guide" />;
}
