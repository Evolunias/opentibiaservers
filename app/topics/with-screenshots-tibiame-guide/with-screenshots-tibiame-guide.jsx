import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-tibiame-guide');
}

export default function WithScreenshotsTibiameGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-tibiame-guide" />;
}
