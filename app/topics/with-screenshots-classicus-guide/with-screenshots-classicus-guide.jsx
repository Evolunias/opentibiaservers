import StaticKeywordPage, { buildStaticKeywordMetadata } from '@/lib/static-keyword-renderers';

export function generateMetadata() {
  return buildStaticKeywordMetadata('with-screenshots-classicus-guide');
}

export default function WithScreenshotsClassicusGuideKeywordPage() {
  return <StaticKeywordPage slug="with-screenshots-classicus-guide" />;
}
